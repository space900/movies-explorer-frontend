import React from "react";
import person from "../../../src/images/person_image.png";
import portfolio from "../../../src/images/portfolio_icon.svg";

function Main() {
  function behaviorSmooth(evt) {
    evt.preventDefault();
    document.querySelector(evt.target.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <main className="content">
      <section className="intro">
        <div className="intro__block">
          <div className="intro__background">
            <h1 className="intro__title">
              Учебный проект студента факультета Веб-разработки.
            </h1>
          </div>
        </div>
      </section>

      <section className="menu">
        <nav className="menu__list">
          <ul className="menu__list-links">
            <li>
              <a href="#about" onClick={behaviorSmooth} className="menu__link">
                О проекте
              </a>
            </li>
            <li>
              <a href="#tech" onClick={behaviorSmooth} className="menu__link">
                Технологии
              </a>
            </li>
            <li>
              <a href="#person" onClick={behaviorSmooth} className="menu__link">
                Студент
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <section className="about" id="about">
        <div className="about__box">
          <h2 className="about__title">О проекте</h2>
          <div className="about__block">
            <div className="about__info">
              <h3 className="info__title">Дипломный проект включал 5 этапов</h3>
              <p className="info__description">
                Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки.
              </p>
            </div>
            <div className="about__info">
              <h3 className="info__title">
                На выполнение диплома ушло 5 недель
              </h3>
              <p className="info__description">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                соблюдать, чтобы успешно защититься.
              </p>
            </div>
          </div>
          <div className="about__grid">
            <div className="about__period">
              <p className="period__title">1 неделя</p>
              <p className="period__description">Back-end</p>
            </div>
            <div className="about__period">
              <p className="period__title">4 недели</p>
              <p className="period__description">Front-end</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tech" id="tech">
        <div className="tech__box">
          <h2 className="about__title">Технологии</h2>
          <h3 className="tech__title">7 технологий</h3>
          <p className="tech__description">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="tech__list">
            <li className="tech__link">HTML</li>
            <li className="tech__link">CSS</li>
            <li className="tech__link">JS</li>
            <li className="tech__link">React</li>
            <li className="tech__link">Git</li>
            <li className="tech__link">Express.js</li>
            <li className="tech__link">mongoDB</li>
          </ul>
        </div>
      </section>

      <section className="person" id="person">
        <div className="tech__box">
          <h2 className="about__title">Студент</h2>
          <div className="person__grid">
            <div className="person__container">
              <h3 className="tech__title person__title_position">Андрей</h3>
              <p className="person__subtitle">Фронтенд-разработчик, 28 лет</p>
              <p className="tech__description person__description">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
                Контур». После того, как прошёл курс по веб-разработке, начал
                заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
              <div className="person__links">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="person__link"
                >
                  Facebook
                </a>
                <a
                  href="https://github.com/space900"
                  rel="noreferrer"
                  target="_blank"
                  className="person__link"
                >
                  github
                </a>
              </div>
            </div>
            <img className="person__image" src={person} alt="фото Андрея" />
          </div>
          <div className="person__portfolio">
            <h3 className="person__subtitle portfolio__description">
              Портфолио
            </h3>
            <ul className="portfolio__list">
              <li className="portfolio__links">
                <a
                  className="portfolio__link"
                  href="https://github.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Статичный сайт
                  <img
                    src={portfolio}
                    className="portfolio__icon"
                    alt="иконка"
                  />
                </a>
              </li>
              <li className="portfolio__links">
                <a
                  className="portfolio__link"
                  href="https://github.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Адаптивный сайт
                  <img
                    src={portfolio}
                    className="portfolio__icon"
                    alt="иконка"
                  />
                </a>
              </li>
              <li className="portfolio__links">
                <a
                  className="portfolio__link"
                  href="https://github.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Одностраничное приложение
                  <img
                    src={portfolio}
                    className="portfolio__icon"
                    alt="иконка"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
