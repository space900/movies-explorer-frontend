import { HourDuration } from "../../utils/constants";

const Card = ({
  movie,
  savedMoviesId,
  isSaved,
  deleteMovie,
  handleSaveMovie,
}) => {
  // eslint-disable-next-line consistent-return
  const handleIsLike = (card, savedCardsId) => {
    if (card.id) {
      return savedCardsId.some((el) => el === card.id);
    }
  };

  const isLiked = handleIsLike(movie, savedMoviesId);
  const cardLikeButtonClassName = `movies__icon ${
    isLiked || isSaved ? "movies__icon_active" : ""
  }`;
  const hours = Math.trunc(movie.duration / HourDuration);
  const minutes = movie.duration % HourDuration;
  const time = `${hours > 0 ? `${hours}ч ` : ""}${
    minutes > 0 ? `${minutes}м` : ""
  }`;
  const trailer = `${isSaved ? movie.trailer : movie.trailerLink}`;

  function handleSave() {
    if (isSaved) {
      deleteMovie(movie);
    } else if (isLiked) {
      deleteMovie(movie);
    } else {
      handleSaveMovie(movie);
    }
  }

  return (
    <li className="movies__item">
      <a
        // className="movies__image"
        href={trailer.startsWith("https") ? trailer : "https://www.youtube.com"}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies__image"
          src={
            isSaved
              ? movie.image
              : `https://api.nomoreparties.co${movie.image.url}`
          }
          alt={movie.name}
        />
      </a>
      <div className="movies__text">
        <p className="movies__title">{movie.nameRU}</p>
        <p className="movies__duration">{time}</p>
        <button
          type="button"
          aria-label="Лайк"
          onClick={handleSave}
          className={cardLikeButtonClassName}
        />
      </div>
    </li>
  );
};

export default Card;
