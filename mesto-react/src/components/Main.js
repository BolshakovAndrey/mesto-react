import React from 'react'
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
            .catch((err) => {
                console.log('Error: ' + err);
            })
    })

    React.useEffect(() => {
        api.getInitialCards()
            .then((res) => setCards(res))
            .catch((err) => {
                console.log(`Error: ${err}`);
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
                        <p className="profile__about">{userDescription}</p>
                        <button className="profile__edit-btn page__button"
                                title="Редактировать профиль"
                                type="button"
                                onClick={props.onEditProfile}
                        ></button>
                    </div   >
                    <button className="profile__add-btn page__button"
                            title="Добавить новую фотографию"
                            type="button"
                            onClick={props.onAddPlace}
                    ></button>
                </section>
                <section className="cards">
                    <ul className="cards__list">
                    {cards.map((card) => (
                        <Card key={card._id} onClick={props.onCardClick} card={card} />
                    ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default Main;