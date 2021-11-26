import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP} from '../Actions/actionType';

const INITIAL_STATE = {
  isUserLogin: false,
};

export function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_SIGNUP:
      return {...state, ...action.payload};
    case USER_LOGIN:
      return {...action.payload};
    case USER_LOGOUT:
      return {...action.payload};
    default:
      return state;
  }
}
