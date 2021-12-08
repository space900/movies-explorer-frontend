import React from "react";
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
    const location = useLocation();

    return (
        <article className="card">
            <img className={props.card.img} alt={props.card.name} />
            {location.pathname ==='/saved-movies' ?
            <button type="button" aria-label="Лайк"></button>
            :
            <>
            <button type="button" aria-label="Прозрачный лайк"></button>
            <button type="button" aria-label="Лайк"></button> 
            </>
            }
            <div className="card__description">
                <h2 className="card__title">{props.card.name}</h2>
                <p className="card__duration">{props.card.duration}</p>
            </div>
        </article>
    );
}

export default MoviesCard;