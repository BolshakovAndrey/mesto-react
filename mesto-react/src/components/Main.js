import React from 'react'
import api from "../utils/api";


function Main(props) {
    const [userName, setuserName] = React.useState('');
    const [userDescription, setuserDescription] = React.useState('');
    const [userAvatar, setuserAvatar] = React.useState('');

    React.useEffect(() => {
        api.getUserInfo()
            .then((res) => {
                setuserName(res.name);
                setuserDescription(res.about);
                setuserAvatar(res.avatar);
            })
            .catch((err) => {
                console.log('Error: ' + err);
            })
    })

    return (
        <div className="container">
            <main className="content">
                <section className="profile">
                    <div className="profile__avatar-container">
                        <img alt="Аватар профиля" src={userAvatar} className="profile__avatar" />
                        <button aria-label="Обновить аватар"
                                className="profile__avatar-btn"
                                type="button"
                                onClick={props.onEditAvatar}
                        ></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-btn page__button"
                                title="Редактировать профиль"
                                type="button"
                                onClick={props.onEditProfile}
                        ></button>
                        <p className="profile__about">{userDescription}</p>
                    </div   >
                    <button className="profile__add-btn page__button"
                            title="Добавить новую фотографию"
                            type="button"
                            onClick={props.onAddPlace}
                    ></button>
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
        </div>
    );
}

export default Main;