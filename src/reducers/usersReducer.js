import { FETCH_USERS } from '../actions/usersActions';

const initialState = {
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS:
      return { ...state, list: action.payload };
    default: 
      return state;
  }
}
