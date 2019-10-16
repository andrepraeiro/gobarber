export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: data,
  };
}

export function updateProfileSuccess(profile) {
  console.tron.log('action.profile', profile);
  return {
    type: '@user/UPDATE_PROFILE_SUCCESSS',
    payload: profile,
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}
