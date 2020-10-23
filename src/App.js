import React, { useEffect, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/layout/SearchBar'
const App = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit()
  }, [])

  return (
    <Fragment>
      <SearchBar />
    </Fragment>
  );
}

export default App;
