import React, {useState, useEffect} from 'react'
import './../index.css'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import {CurrentUserContext,} from '../contexts/CurrentUserContext';
import api from "../utils/api";


function App() {
    //Стейты для popup (Принимает состояние - открыт-true/не открыт-false
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

    //Стейт для выбранного фото
    const [selectedCard, setSelectedCard] = useState(null);

    // Стейт, отвечающий за данные текущего пользователя
    const [currentUser, setCurrentUser] = React.useState({
        name: 'TestUser',
        about: 'Test',
        avatar: 'Test avatar',
    });

    useEffect(() => {
        api.getUserInfo()
            .then((res) => {
                setCurrentUser(res);
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            })
    }, [])

    //  Обработчик для отправки данных пользователя на сервер
    // (редактирование данных профиля)
    function handleUpdateUser(data) {
        api.setUserInfo(data)
            .then(res => {
                setCurrentUser(res);
            })
            .then(() => {
                setEditProfilePopupOpen(false);
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            })
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

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
        setSelectedCard(null);
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <div className="container">
                    <Header/>
                    <Main
                        onEditProfile={handleEditProfilePopupOpen}
                        onAddPlace={handleAddPlacePopupOpen}
                        onEditAvatar={handleEditAvatarPopupOpen}
                        onCardClick={handleCardClick}
                    />
                    <Footer/>
                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        buttonText='Сохранить'
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                    />
                    <PopupWithForm
                        name='add'
                        title="Новое место"
                        buttonText='Создать'
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                    >
                        <input className="popup__input" id='popup-add-name' maxLength="40" minLength="2"
                               name="name" placeholder="Название" required type="text"/>
                        <p className="popup__input-error" id="popup-add-name-error"/>
                        <input className="popup__input" id='link' maxLength="200" minLength="2"
                               name="link" placeholder="Ссылка на картинку" required type="url"/>
                        <p className="popup__input-error" id="link-error"/>
                    </PopupWithForm>
                    <PopupWithForm
                        name="avatar"
                        title="Обновить аватар"
                        buttonText='Сохранить'
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                    >
                        <input className="popup__input" id="avatar-link" name="avatarLink"
                               placeholder="Ссылка на картинку"
                               required
                               type="url"/>
                        <p className='popup__input-error' id='avatar-link-error'/>
                    </PopupWithForm>
                    <PopupWithForm
                        name="confirm"
                        title="Вы уверены?"
                        buttonText="Да"
                    />
                    <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopups}
                    />
                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
