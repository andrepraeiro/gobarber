import produce from 'immer';

const INITIAL_VALUE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCSESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
      });
    default:
      return state;
  }
}
