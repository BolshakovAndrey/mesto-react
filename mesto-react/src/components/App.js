import React, {useState} from 'react';
import './../index.css'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

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
        <div className="page">
            <Header/>
            <Main
                onEditProfile={handleEditProfilePopupOpen}
                onAddPlace={handleAddPlacePopupOpen}
                onEditAvatar={handleEditAvatarPopupOpen}
                onCardClick={handleCardClick}
            />
            <Footer/>
            <PopupWithForm
                name='edit'
                title='Редактировать профиль'
                buttonText='Сохранить'
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                >
                    <input className="popup__input" id='popup-name' maxLength="40" minLength="2"
                           name="name" type="text" placeholder='Имя' required />
                    <p className="popup__input-error" id="popup-name-error"/>
                    <input className="popup__input" id='popup-about' maxLength="200" minLength="2"
                           name="about" type="text" placeholder='Описание' required />
                    <p className="popup__input-error" id="popup-about-error"/>
            </PopupWithForm>
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
            {selectedCard &&
                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />
            }
        </div>
    );
}

export default App;
