import React from 'react';

function Main() {
    return (
        <main className="content">
            <section className="intro">
                <div className="intro__block">
                    <div className="intro__background">
                        <h1 className="intro__title">Учебный проект студента факультета Веб-разработки.</h1>
                    </div>
                </div>
            </section>

            <section className="menu">
                <nav className="menu__list">
                    <ul className="menu__list-links">
                        <li>
                            <p className="menu__link">О проекте</p>
                        </li>
                        <li>
                            <p className="menu__link">Технологии</p>
                        </li>
                        <li>
                            <p className="menu__link">Студент</p>
                        </li>
                    </ul>
                </nav>
            </section>

            <section className="about">
                
                <div className="about__box">
                    <h2 className="about__title">О проекте</h2>
                    <div className="about__block">
                        <div className="about__info">
                            <h3 className="info__title">Дипломный проект включал 5 этапов</h3>
                            <p className="info__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                        </div>
                        <div className="about__info">
                            <h3 className="info__title">На выполнение диплома ушло 5 недель</h3>
                            <p className="info__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
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

            <section className="tech">
                <div className="tech__box">
                    <h3 className="about__title">Технологии</h3>
                    <h3 className="tech__title">7 технологий</h3>
                    <p className="tech__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
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

            <section className="person">
                <div className="tech__box">
                    <h3 className="about__title">Студент</h3>
                    <h3 className="tech__title">Андрей</h3>
                    <p className="tech__description">Фронтенд-разработчик, 28 лет</p>
                    <ul className="tech__list">
                        <li className="tech__link">HTML</li>
                        <li className="tech__link">CSS</li>
                        <li className="tech__link">JS</li>
                    </ul>
                </div>
            </section>

        </main>
    );
}

export default Main;