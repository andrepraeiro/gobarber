import produce from 'immer';

const INITIAL_VALUE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_VALUE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@auth/SIGN_IN_SUCCSESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
