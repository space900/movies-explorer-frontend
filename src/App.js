import React from 'react';
// import { Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import SearchForm from './components/Movies/SearchForm';

function App() {
  return (
    <>
      <div className="page">
        <Header />
        {/* <Main /> */}
        <SearchForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
