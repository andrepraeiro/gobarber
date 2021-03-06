import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    console.tron.log('payload', payload);
    const { name, email, avatar_id, ...rest } = payload;
    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };
    console.tron.log('profile', profile);
    const response = yield call(api.put, 'users', profile);
    toast.success('Perfil atualizado com sucesso');
    console.tron.log('response.data', response.data);
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    console.tron.log(err);
    toast.error('Error ao atualizar perfil, confira os seus dados.');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
