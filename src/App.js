import React from 'react';
// import { Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
