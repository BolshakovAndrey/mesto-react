import React from 'react'


function Main() {
    return (
        // <div className="container">
            <main className="content">
                <section className="profile">
                    <div className="profile__avatar-container">
                        <img alt="Аватар профиля" src='#' className="profile__avatar" />
                        <button aria-label="Обновить аватар" className="profile__avatar-btn" type="button"></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name"></h1>
                        <button className="profile__edit-btn page__button" title="Редактировать профиль" type="button"></button>
                        <p className="profile__about"></p>
                    </div>
                    <button className="profile__add-btn page__button" title="Добавить новую фотографию" type="button"></button>
                </section>

                {/*// Cards блок*/}
                <section className="cards">
                    <ul className="cards__list"></ul>
                </section>

                {/*// Темплэйт*/}
                <template id="card-template">
                    <li className="cards__item">
                        <figure className="card">
                            <button className="link card__delete-btn" type="button"></button>
                            <img alt="Изображение" src='#' className="card__image" />
                            <div className="card__wrapper">
                                <h2 className="card__title"></h2>
                                <div className="card__like-container">
                                    <button className="card__like"></button>
                                    <span className="card__like-counter"></span>
                                </div>
                            </div>
                        </figure>
                    </li>
                </template>

            </main>
        // </div>
    );
}

export default Main;