import {useState, useEffect, useContext} from 'react'
import api from "../utils/api";
import Card from "./Card";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {

    const [cards, setCards] = useState([]);

    //Подписка на контекст CurrentUserContext
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        api.getInitialCards()
            .then((res) => setCards(res))
            .catch((err) => {
                console.log(`Error: ${err}`);
            })
    }, [])

    return (
        // <div className="container">
            <main className="content">
                <section className="profile">
                    <div className="profile__avatar-container">
                        <img alt="Аватар профиля" src={`${currentUser.avatar}`} className="profile__avatar"/>
                        <button aria-label="Обновить аватар"
                                className="profile__avatar-btn"
                                type="button"
                                onClick={props.onEditAvatar}
                        ></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <p className="profile__about">{currentUser.about}</p>
                        <button className="profile__edit-btn page__button"
                                title="Редактировать профиль"
                                type="button"
                                onClick={props.onEditProfile}
                        ></button>
                    </div>
                    <button className="profile__add-btn page__button"
                            title="Добавить новую фотографию"
                            type="button"
                            onClick={props.onAddPlace}
                    ></button>
                </section>
                <section className="cards">
                    <ul className="cards__list">
                        {cards.map((card) => (
                            <Card key={card._id} onClick={props.onCardClick} card={card}/>
                        ))}
                    </ul>
                </section>
            </main>
        // </div>
    );
}

export default Main;