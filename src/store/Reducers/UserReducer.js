import {USER_LOGIN, USER_LOGOUT, USER_SIGNUP,SEEN_WALK_THROUGH} from '../Actions/actionType';

const INITIAL_STATE = {
  isUserLogin: false,
  isWalkThroughSeen: false,
};

export function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_SIGNUP:
      return {...state, ...action.payload};
    case USER_LOGIN:
      return {...state,...action.payload};
    case USER_LOGOUT:
      return {...state,...action.payload};
    case SEEN_WALK_THROUGH:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
