import React from 'react';

function Card(props) {

    function handleClick() {
        props.onClick(props.card);
    }

    return(
        <li className="cards__item">
            <figure className="card">
                <button className="link card__delete-btn"
                        type="button"
                        aria-label="Удалить фотографию">
                </button>
                <img onClick={handleClick}
                     alt={`Изображение ${props.card.name}`}
                     className="card__image"
                     src={props.card.link}/>
                <div className="card__wrapper">
                    <h2 className="card__title">{props.card.name}</h2>
                    <div className="card__like-container">
                        <button className="card__like"
                                aria-label="Поставить лайк"
                                type="button">
                        </button>
                        <span className="card__like-counter">{props.card.likes.length}</span>
                    </div>
                </div>
            </figure>
        </li>
    );
}

export default Card