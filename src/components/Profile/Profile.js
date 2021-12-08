import React from "react";
import Form from "../Form/Form";

function Profile(props) {

    return (
        <section className="profile">
            <h1 className="profile__title">Привет, Виталий!</h1>
            <form className="profile__form">
                <label className="profile__label" htmlFor="name">Имя
                    <input className="profile__label" placeholder="name" value="Виталий" id="name" disabled />
                </label>
                <span className="profile__border"></span>
                <label className="profile__label" htmlFor="email">E-mail
                    <input className="profile__label" placeholder="name" value="pochta@yandex.ru" id="email" disabled />
                </label>
                <button className="profile__edit" type="submit">Редактировать</button>
                <button className="profile__edit profile__logout" type="button">Выйти из аккаунта</button>
            </form>

        </section>
    )
}

export default Profile;