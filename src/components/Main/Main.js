import React from 'react';
import background from '../../../src/images/main_background.png';

function Main() {
    return (
        <section className="intro">
            <div className="intro__block">
                
                <div className="intro__text">
                    <h1 className="intro__header">Учебный проект студента факультета Веб-разработки</h1>
                </div>
                
                <img src={background} className="intro__background" alt="Логотип Практикума" />
            </div>
        </section>
    );
}

export default Main;