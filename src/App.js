import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit()
  }, [])

  return (
    <div className="App">
      My App
    </div>
  );
}

export default App;
