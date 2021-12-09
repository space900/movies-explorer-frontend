import React from "react";
// import { Route, useNavigate } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Movies from "./components/Movies/Movies";
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
