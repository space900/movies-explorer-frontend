import React, { useState, useEffect, useCallback } from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import SideMenu from "../SideMenu/SideMenu";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Preloader from "../Preloader/Preloader";

import HeaderLayout from "../../layouts/HeaderLayout";
import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import ProtectedRoute from "../ProtectedRoute";

import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

import {
  registrationErrorMessages,
  loginErrorMessages,
  profileErrorMessages,
  SERVER_ERROR_MESSAGE,
  DEFAULT_ERROR_MESSAGE,
  MOVIES_URL,
} from "../../utils/constants";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [moviesData, setMoviesData] = React.useState({});
  const [savedMoviesData, setSavedMoviesData] = React.useState({});

  const [formErrorMessage, setFormErrorMessage] = React.useState("");
  const [profileIsBeingEdited, setProfileIsBeingEdited] = React.useState(false);

  const [isSideMenuPopupOpen, setSideMenuPopupOpen] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] =
    React.useState(false);
  const [infoTooltipMessage, setIinfoTooltipMessage] = React.useState("");

  const [loginSubmitButtonText, setLoginSubmitButtonText] =
    React.useState("Войти");
  const [registerSubmitButtonText, setRegisterSubmitButtonText] =
    React.useState("Зарегистрироваться");
  const [profileSubmitButtonText, setProfileSubmitButtonText] =
    React.useState("Сохранить");

  const history = useHistory();

  // const tokenCheck = React.useCallback(() => {
  //   mainApi.checkToken()
  //     .then((res) => {
  //       console.log(res, 'res')
  //       if (res) {
  //         setLoggedIn(true);
  //         console.log(res, 'res')
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e, "ошибка с токеном");
  //     })
  // }, [history]);

  // React.useEffect(() => {
  //   tokenCheck();
  // }, [tokenCheck]);

  // React.useEffect(() => {
  //   if (loggedIn) {

  //   }
  // }, [loggedIn, history]);

  // React.useEffect(() => {
  //   if (loggedIn)
  // })

  React.useEffect(() => {
    if (loggedIn) {
      const localUserData = localStorage.getItem("currentUser");
      const localMoviesData = localStorage.getItem("movies");
      const localSavedMoviesData = localStorage.getItem("savedMovies");
      // console.log(localUserData, "если логин? локал юзер")

      if (!localUserData) {
        mainApi
          .getUserInfo()
          .then((res) => {
            // console.log(localUserData, "если не локал юзер?")
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            setCurrentUser(res.data);
            console.log("movies", localStorage.getItem("movies"));
          })
          .catch((e) => {
            console.log("movies", localStorage.getItem("movies"));
            switch (e) {
              case 400:
              case 401:
                setFormErrorMessage(loginErrorMessages.INVALID_CREDENTIALS);
                localStorage.clear();
                break;
              case 500:
                setFormErrorMessage(DEFAULT_ERROR_MESSAGE);
                break;
              default:
                console.log(`Ошибка при получении данных: ${e}`);
                setFormErrorMessage(loginErrorMessages.UNAUTHORIZED);
                localStorage.clear();
            }
          })
          
      } else {
        setCurrentUser(JSON.parse(localUserData));
        // console.log(localUserData, "в противном случае")
      }

      if (!localMoviesData) {
        moviesApi
          .getMovies()
          .then((res) => {
            localStorage.setItem("movies", JSON.stringify(res.data));
            setMoviesData(res.data);
            // console.log(res.data, 'res.data movie');
            // console.log(res, 'res movie');
          })
          .catch((e) => console.log(`Ошибка при получении данных: ${e}`));
      } else {
        setMoviesData(JSON.parse(localMoviesData));
      }

      if (!localSavedMoviesData) {
        mainApi
          .getSavedMovies()
          .then((res) => {
            localStorage.setItem("savedMovies", JSON.stringify(res.data.data));
            setSavedMoviesData(res.data.data);
          })
          .catch((e) => console.log(`Ошибка при получении данных: ${e}`));
      } else {
        setSavedMoviesData(JSON.parse(localSavedMoviesData));
      }
    }
  }, [loggedIn]);

  const handleTokenCheck = React.useCallback(() => {
    // let token = localStorage.getItem("jwt")
    // const localUserData = localStorage.getItem("currentUser");
    // console.log(localUserData, "localUserData");
    mainApi
      .getUserInfo()
      .then(() => {
        console.log("movies", localStorage.getItem("movies"));
        // data
        // let token = localStorage.getItem("jwt")
        // localStorage.getItem("jwt", data.token)

        // console.log(localUserData, "localUserData");
        // console.log(data, 'data');
        // console.log(token, 'token');
        // console.log(data.token);
        setLoggedIn(true);
      })
      .catch((e) => {
        console.log("movies", localStorage.getItem("movies"));
        switch (e) {
          case 400:
          case 401:
            setFormErrorMessage(loginErrorMessages.INVALID_CREDENTIALS);
            localStorage.clear();
            break;
          case 500:
            setFormErrorMessage(DEFAULT_ERROR_MESSAGE);
            break;
          default:
            console.log(`Ошибка при получении данных: ${e}`);
            setFormErrorMessage(loginErrorMessages.UNAUTHORIZED);
            localStorage.clear();
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  React.useEffect(() => {
    handleTokenCheck();
  }, [handleTokenCheck]);

  // const handleTokenCheck = () => {
  //   const token = localStorage.getItem('token');
    
  //   console.log('вот он токен', token);
    
  //     mainApi.getUserInfo()
  //     .then((res) => {
  //       if (res.data.email) {
  //         console.log(mainApi.getUserInfo)
  //         console.log(res.data, 'res.data');
  //         setCurrentUser(res.data)
  //         setLoggedIn(true);
  //       }
  //     })
  //     .catch((err)=>{
  //       console.log(err);
        
  //       setLoggedIn(false);
  //       localStorage.clear()
  //     })
    
  // }

  const handleRegistration = (data) => {
    setRegisterSubmitButtonText("Выполняется регистрация...");

    mainApi
      .register(data)
      .then(() => {
        handleLogin({
          email: data.email,
          password: data.password,
        });
      })
      .catch((e) => {
        switch (e) {
          case 400:
            setFormErrorMessage(registrationErrorMessages.BAD_REQUEST);
            break;
          case 409:
            setFormErrorMessage(registrationErrorMessages.CONFLICT);
            break;
          default:
            setFormErrorMessage(DEFAULT_ERROR_MESSAGE);
        }
      })
      .finally(() => {
        setRegisterSubmitButtonText("Зарегистрироваться");
      });
  };

  const handleLogin = (data) => {
    setLoginSubmitButtonText("Выполняется вход...");

    mainApi
      .authorize(data)
      .then(() => {
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((e) => {
        switch (e) {
          case 400:
          case 401:
            setFormErrorMessage(loginErrorMessages.INVALID_CREDENTIALS);
            localStorage.clear();
            break;
          case 500:
            setFormErrorMessage(DEFAULT_ERROR_MESSAGE);
            break;
          default:
            setFormErrorMessage(loginErrorMessages.UNAUTHORIZED);
            localStorage.clear();
        }
      })
      .finally(() => {
        setLoginSubmitButtonText("Войти");
      });
  };

  const handleSignOut = () => {
    // let localUserData = localStorage.getItem("currentUser");
    mainApi
      .signOut()
      .then(() => {
        setLoggedIn(false);
        
        // localUserData = null;
        // console.log(localUserData," обнуление")
        // localStorage.removeItem("currentUser");
        localStorage.clear();
        // location.reload()
        history.push("/");
      })
      .catch((e) => {
        console.log(`Ошибка при попытке выйти: ${e}`);
      });
  };

  const handleUpdateUser = (data) => {
    setProfileSubmitButtonText("Сохранение...");

    mainApi
      .setUserInfo(data)
      .then((res) => {
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        setCurrentUser(res.data);
      })
      .then(() => {
        setProfileIsBeingEdited(false);
        setIinfoTooltipMessage(profileErrorMessages.SUCCESS);
        setIsInfoTooltipPopupOpen(true);
      })
      .catch((err) => {
        switch (err) {
          case 409:
            setFormErrorMessage(profileErrorMessages.CONFLICT);
            break;
          default:
            setFormErrorMessage(profileErrorMessages.BAD_REQUEST);
        }
      })
      .finally(() => {
        setProfileSubmitButtonText("Сохранить");
      });
  };

  const handleCardDelete = (card) => {
    mainApi
      .deleteSavedMovie(card._id)
      .then(() => {
        localStorage.setItem(
          "savedMovies",
          JSON.stringify(savedMoviesData.filter((item) => item !== card))
        );
        setSavedMoviesData(savedMoviesData.filter((item) => item !== card));
      })
      .catch((e) => {
        console.log(`Ошибка при попытке удалить из сохранённых...: ${e}`);
      });
  };

  const handleCardSaveToggle = (card) => {
    if (card.isSaved) {
      const savedMovie = savedMoviesData.find(
        (movie) => movie.movieId === card.id
      );
      handleCardDelete(savedMovie);
    } else {
      mainApi
        .saveMovie({
          country: card.country || " ",
          director: card.director || " ",
          duration: card.duration || 0,
          year: card.year || " ",
          description: card.description || " ",
          image: `${MOVIES_URL}${card.image.url}`,
          trailer:
            card.trailerLink ||
            `https://www.youtube.com/`,
          thumbnail: `${MOVIES_URL}${card.image.formats.thumbnail.url}`,
          nameRU: card.nameRU || " ",
          nameEN: card.nameEN || " ",
          movieId: card.id,
        })
        .then((res) => {
          localStorage.setItem(
            "savedMovies",
            JSON.stringify([res.data, ...savedMoviesData])
          );
          setSavedMoviesData([res.data, ...savedMoviesData]);
        })
        .catch((e) => {
          console.log(`Ошибка при попытке сохранения...: ${e}`);
        });
    }
  };

  const handleNoMoviesData = () => {
    setIsInfoTooltipPopupOpen(true);
    setIinfoTooltipMessage(SERVER_ERROR_MESSAGE);
  };

  const handleEditProfile = () => {
    setProfileIsBeingEdited(true);
  };

  const resetAllFormErrorMessages = () => {
    setFormErrorMessage("");
  };

  const handleSideMenuPopupOpen = () => {
    setSideMenuPopupOpen(true);
  };

  const closeAllPopups = () => {
    setSideMenuPopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
  };

  const closeByEsc = React.useCallback((e) => {
    if (e.key === "Escape") {
      closeAllPopups();
    }
  }, []);

  React.useEffect(() => {
    if (isSideMenuPopupOpen || isInfoTooltipPopupOpen) {
      document.addEventListener("keydown", closeByEsc);
    }
    return () => document.removeEventListener("keydown", closeByEsc);
  }, [closeByEsc, isSideMenuPopupOpen, isInfoTooltipPopupOpen]);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__container">
          {isLoading ? (
            <Preloader />
          ) : (
            <Switch>
              <Route exact path="/">
                <HeaderFooterLayout
                  component={Main}
                  loggedIn={loggedIn}
                  headerModifier="header_place_landing"
                  onOpenMenu={handleSideMenuPopupOpen}
                />
              </Route>
              <ProtectedRoute path="/movies" loggedIn={loggedIn}>
                <HeaderFooterLayout
                  component={Movies}
                  loggedIn={loggedIn}
                  onOpenMenu={handleSideMenuPopupOpen}
                  moviesData={moviesData}
                  savedMoviesData={savedMoviesData}
                  onNoMoviesData={handleNoMoviesData}
                  onCardSaveToggle={handleCardSaveToggle}
                />
              </ProtectedRoute>
              <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
                <HeaderFooterLayout
                  component={SavedMovies}
                  loggedIn={loggedIn}
                  onOpenMenu={handleSideMenuPopupOpen}
                  moviesData={savedMoviesData}
                  onCardDelete={handleCardDelete}
                />
              </ProtectedRoute>
              <ProtectedRoute path="/profile" loggedIn={loggedIn}>
                <HeaderLayout
                  component={Profile}
                  loggedIn={loggedIn}
                  onOpenMenu={handleSideMenuPopupOpen}
                  submitButtonText={profileSubmitButtonText}
                  onEditProfile={handleEditProfile}
                  onUpdateUser={handleUpdateUser}
                  isBeingEdited={profileIsBeingEdited}
                  profileErrorMessage={formErrorMessage}
                  resetFormErrorMessage={resetAllFormErrorMessages}
                  onSignOut={handleSignOut}
                />
              </ProtectedRoute>
              <Route path="/signup">
                {loggedIn ? (
                  <Redirect to="/movies" />
                ) : (
                  <Register
                    submitButtonText={registerSubmitButtonText}
                    onRegistration={handleRegistration}
                    authErrorMessage={formErrorMessage}
                    resetFormErrorMessage={resetAllFormErrorMessages}
                  />
                )}
              </Route>
              <Route path="/signin">
                {loggedIn ? (
                  <Redirect to="/movies" />
                ) : (
                  <Login
                    submitButtonText={loginSubmitButtonText}
                    onLogin={handleLogin}
                    authErrorMessage={formErrorMessage}
                    resetFormErrorMessage={resetAllFormErrorMessages}
                  />
                )}
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          )}
          <SideMenu
            isOpen={isSideMenuPopupOpen}
            onClose={closeAllPopups}
            onMobileLink={closeAllPopups}
          />
          <InfoTooltip
            isOpen={isInfoTooltipPopupOpen}
            message={infoTooltipMessage}
            onClose={closeAllPopups}
          />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
