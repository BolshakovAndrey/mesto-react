import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

    function handleEditProfilePopupOpen() {
        setEditProfilePopupOpen(!isEditProfilePopupOpen);
    }

    function handleAddPlacePopupOpen() {
        setAddPlacePopupOpen(!isAddPlacePopupOpen);
    }

    function handleEditAvatarPopupOpen() {
        setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }

    function closeAllPopups() {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
    }

    return (
        <div className="page">
            <Header/>
            <Main
                onEditAvatar={handleEditAvatarPopupOpen}
                onEditProfile={handleEditProfilePopupOpen}
                onAddPlace={handleAddPlacePopupOpen}
            />
            <PopupWithForm
                name='edit'
                title='Редактировать профиль'
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                buttonText='Сохранить'
                children={
                    <>
                        <input className="popup__input" id='popup-name' maxLength="40" minLength="2"
                               name="name" required type="text" placeholder='Имя'/>
                        <span className="popup__input-error" id="popup-name-error"></span>
                        <input className="popup__input" id='popup-about' maxLength="200" minLength="2"
                               name="about" required type="text" placeholder='Описание'/>
                        <span className="popup__input-error" id="popup-about-error"></span>
                    </>
                }

            />
            <PopupWithForm
                name='add'
                title="Новое место"
                children={
                    <>
                        <input className="popup__input" id='popup-add-name' maxLength="40" minLength="2"
                               name="name" placeholder="Название" required type="text"/>
                        <span className="popup__input-error" id="popup-add-name-error"></span>
                        <input className="popup__input" id='link' maxLength="200" minLength="2"
                               name="link" placeholder="Ссылка на картинку" required type="url"/>
                        <span className="popup__input-error" id="link-error"></span>
                    </>
                }
                buttonText='Создать'
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            />
            <ImagePopup />
            <PopupWithForm
                name="avatar"
                title="Обновить аватар"
                children={
                    <>
                        <input className="popup__input" id="avatar-link" name="avatarLink"
                               placeholder="Ссылка на картинку"
                               required
                               type="url"/>
                        <p className='popup__input-error' id='avatar-link-error'></p>
                    </>
                }
                buttonText='Сохранить'
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            />

            <PopupWithForm
                name="confirm"
                title="Вы уверены?"
                children={
                    <>
                    </>
                }
                buttonText="Да"
            />
            <template id="card-template">
                <li className="cards__item">
                    <figure className="card">
                        <button className="link card__delete-btn" type="button"></button>
                        <img alt="Изображение" className="card__image" />
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
            <Footer/>
        </div>
    );
}

export default App;
