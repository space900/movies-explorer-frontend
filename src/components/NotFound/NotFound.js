import React from "react";
// import { useNavigate } from 'react-router-dom';


function NotFound(props) {

    // const history = useNavigate();

    return (
        <section className="page-error">
            <p className="page-error__title">404</p>
            <p className="page-error__text">Страница не найдена</p>
            <button className="page-error__button" /* onClick={() => history.goBack()} */ >Назад</button>
        </section>
    )
}

export default NotFound;