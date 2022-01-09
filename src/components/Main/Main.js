import "./Main.css";
import { Link } from "react-router-dom";
import personImage from "../../images/person_image.png";

function Main() {
  function behaviorSmooth(evt) {
    evt.preventDefault();
    document.querySelector(evt.target.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  }

  const techList = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Git",
    "Express.js",
    "mongoDB",
  ];

  const linksAbout = [
    {
      title: "Facebook",
      link: "https://facebook.com",
    },
    {
      title: "Github",
      link: "https://github.com/space900",
    },
  ];

  const portfolioList = [
    {
      title: "Статичный сайт",
      link: "https://github.com/space900",
    },
    {
      title: "Адаптивный сайт",
      link: "https://github.com/space900",
    },
    {
      title: "Одностраничное приложение",
      link: "https://github.com/space900",
    },
  ];

  return (
    <main className="main page__content">
      <section className="promo main__section">
        <div className="promo__container main__section-container main__section-container_size_xs">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
        </div>
      </section>

      <section className="menu">
        <nav className="menu__list">
          <ul className="menu__list-links">
            <li>
              <Link
                to={{ pathname: "#about" }}
                onClick={behaviorSmooth}
                className="menu__link"
              >
                О проекте
              </Link>
            </li>
            <li>
              <Link
                to={{ pathname: "#tech" }}
                onClick={behaviorSmooth}
                className="menu__link"
              >
                Технологии
              </Link>
            </li>
            <li>
              <Link
                to={{ pathname: "#person" }}
                onClick={behaviorSmooth}
                className="menu__link"
              >
                Студент
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className="project main__section" id="about">
        <div className="main__section-container main__section-container_size_m">
          <h2 className="section__title">О проекте</h2>
          <ul className="project-desc">
            <li className="project-desc__cell">
              <h3 className="project-desc__heading">
                Дипломный проект включал 5 этапов
              </h3>
              <p className="project-desc__text">
                Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки.
              </p>
            </li>
            <li className="project-desc__cell">
              <h3 className="project-desc__heading">
                На выполнение диплома ушло 5 недель
              </h3>
              <p className="project-desc__text">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                соблюдать, чтобы успешно защититься.
              </p>
            </li>
          </ul>

          <ul className="project-timing">
            <li className="project-timing__cell">
              <p className="project-timing__heading">1 неделя</p>
              <p className="project-timing__text">Back-end</p>
            </li>
            <li className="project-timing__cell">
              <p className="project-timing__heading">4 недели</p>
              <p className="project-timing__text">Front-end</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="techs main__section" id="tech">
        <div className="main__section-container main__section-container_size_m">
          <h2 className="section__title">Технологии</h2>
          <div className="techs__content">
            <h2 className="techs__subtitle">7 технологий</h2>
            <p className="techs__text">
              На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые
              применили в&nbsp;дипломном проекте.
            </p>
          </div>
          <ul className="techs__list">
            {techList.map((item, i) => (
              <li className="techs__list-item" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-person main__section" id="person">
        <div className="main__section-container main__section-container_size_s">
          <h2 className="section__title">Студент</h2>
          <div className="about-person__content">
            <img
              className="about-person__image"
              src={personImage}
              alt="Фото студента"
            />
            <div className="about-person__student">
              <div className="about-person__bio">
                <h2 className="about-person__subtitle">Андрей</h2>
                <p className="about-person__headline">
                  Фронтенд-разработчик, 28 лет
                </p>
                <p className="about-person__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <ul className="about-person__links">
                {linksAbout.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="about-person__link"
                      to={{ pathname: item.link }}
                      target="_blank"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__links">
              {portfolioList.map((item, i) => (
                <li className="portfolio__links-item" key={i}>
                  <Link
                    className="portfolio__link"
                    to={{ pathname: item.link }}
                    target="_blank"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
