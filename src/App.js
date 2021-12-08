import React from 'react';
// import { Route, useNavigate } from 'react-router-dom';
// import { Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
// import SearchForm from './components/Movies/SearchForm';

function App() {

  // const history = useNavigate();

  // function handleLogin() {
  //   history.push('/');
  // }

  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Login />
        <Register />
        <Profile />
        <NotFound />
        {/* <SearchForm /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
