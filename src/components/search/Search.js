import React from 'react';
// import {} from '../selectors';
// import {} from '../actions/';
// import { useSelector, useDispatch } from 'react-redux';

const userSearch = () => {
  const dispatch = useDispatch();

  return (
    <form className={styles.Search}>
      <input type="text" placeholder="Search by username" value={query} onChange={(event) => setQuery(event.target.value)}></input>
    </form>
  );
};

export default userSearch;
