export const MAIN_API = "https://api.space.nomoredomains.rocks";
export const MOVIES_URL = "https://api.nomoreparties.co";
export const MOVIES_API = "https://api.nomoreparties.co/beatfilm-movies";

export const SHORT_FILM_MAX_DURATION = 40;

export const patterns = {
  NAME: "[a-zA-Z -]{2,30}",
  EMAIL: "^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\\.)+[A-Za-z]+$",
};

export const customErrorMessages = {
  NAME: "Используйте только латиницу, пробел или дефис",
  EMAIL: "Пример: example@yandex.ru",
  PASSWORD: "Пароль должен быть не короче 8 символов",
};

export const registrationErrorMessages = {
  CONFLICT: "Пользователь с таким email уже зарегистрирован.",
  BAD_REQUEST: "При регистрации пользователя произошла ошибка.",
};

export const loginErrorMessages = {
  INVALID_CREDENTIALS: "Указан неправильный логин или пароль.",
  UNAUTHORIZED:
    "При авторизации произошла ошибка. Токен не передан или передан не в том формате.",
    BAD_REQUEST: "При авторизации произошла ошибка. Переданный токен некорректен.",
};

export const profileErrorMessages = {
  SUCCESS: "Профиль успешно обновлен",
  CONFLICT: "Пользователь с таким email уже зарегистрирован.",
  BAD_REQUEST: "При обновлении профиля произошла ошибка.",
};

export const SERVER_ERROR_MESSAGE =
  "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";

export const DEFAULT_ERROR_MESSAGE = "На сервере произошла ошибка";
