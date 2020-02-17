import { FETCH_USER_DETAIL } from '../actions/userDetailActions';

const initialState = {
  user: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER_DETAIL:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
