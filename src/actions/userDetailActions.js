import { getUser } from '../services/githubAPI';

export const FETCH_USER_DETAIL = 'FETCH_USER_DETAIL';
export const fetchUserDetail = id => dispatch => {
  return getUser(id)
    .then(user => dispatch({
      type: FETCH_USER_DETAIL,
      payload: user
    }));
};
