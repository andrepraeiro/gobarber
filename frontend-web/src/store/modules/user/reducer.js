import produce from 'immer';

const INITIAL_VALUE = {
  profile: null,
};

export default function user(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCSESS':
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    default:
      return state;
  }
}
