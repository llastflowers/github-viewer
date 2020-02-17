import React from 'react';
import Search from '../components/search/Search';
import User from '../components/user/User';
import Repos from '../components/repos/Repos';

export default function GithubViewer() {
  return (
    <>
      <Search />
      <User />
      <Repos />
    </>
  );
}
