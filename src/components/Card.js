import React, {useContext} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card({ card, onClick }) {

    //Подписка на контекст CurrentUserContext
    const currentUser = useContext(CurrentUserContext);


    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `card__delete-btn ${isOwn ? '' : 'card__delete-btn_type_hidden'}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `...`;

    function handleClick() {
        onClick(card);
    }

    return (
        <li className="cards__item">
            <figure className="card">
                <img onClick={handleClick}
                     alt={`Изображение ${card.name}`}
                     className="card__image"
                     src={card.link}/>
                <div className="card__wrapper">
                    <h2 className="card__title">{card.name}</h2>
                    <div className="card__like-container">
                        <button className="card__like"
                                aria-label="Поставить лайк"
                                type="button">
                        </button>
                        <span className="card__like-counter">{card.likes.length}</span>
                    </div>
                </div>
                <button className="{cardDeleteButtonClassName}"
                        type="button"
                        aria-label="Удалить фотографию">
                </button>
            </figure>
        </li>
    );
}

export default Card