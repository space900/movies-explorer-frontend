import React from "react";
// import { Route, useNavigate } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
// import SearchForm from './components/Movies/SearchForm';

function App() {
  // const history = useNavigate();

  // function handleLogin() {
  //   history.push('/');
  // }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path="/movies" exact>
            <Movies />
            <Footer />
          </Route>
          <Route path="/saved-movies" exact>
            <Movies />
            <Footer />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Register />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
