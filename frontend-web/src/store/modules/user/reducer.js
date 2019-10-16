import produce from 'immer';
import { typeSignOut } from '~/store/modules/auth/types';

const INITIAL_VALUE = {
  profile: null,
};

export default function user(state = INITIAL_VALUE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCSESS': {
        draft.profile = action.payload.user;
        break;
      }

      case '@user/UPDATE_PROFILE_SUCCESSS': {
        draft.profile = action.payload;
        break;
      }

      case typeSignOut: {
        draft.profile = null;
        break;
      }

      default:
    }
  });
}
