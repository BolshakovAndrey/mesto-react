import React, {useState, useEffect} from 'react'
import './../index.css'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacesPopup from './AddPlacePopup';
import {CurrentUserContext,} from '../contexts/CurrentUserContext';
import api from "../utils/api";


function App() {
    // Стейты для popup (Принимает состояние - открыт-true/не открыт-false
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

    // Стейт для карточки
    const [cards, setCards] = useState([]);

    // Стейт для выбранного фото
    const [selectedCard, setSelectedCard] = useState(null);

    // Стейт для загрузки
    const [isLoading, setIsLoading] = useState(false);

    // Стейт, отвечающий за данные текущего пользователя
    const [currentUser, setCurrentUser] = React.useState({
        name: 'TestUser',
        about: 'Test',
        avatar: 'Test avatar',
    });

    useEffect(() => {
        setIsLoading(true);

        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, cardsData]) => {
                setCurrentUser(userData);
                setCards(cardsData);
            })
            .catch((err) => {
                console.log(`Не удалось получить данные с сервера. ${err}`);
            })
            .finally(() => {
                setIsLoading(false);
            });
    },[])

    // useEffect(() => {
    //     api.getInitialCards()
    //         .then((res) => setCards(res))
    //         .catch((err) => {
    //             console.log(`Error: ${err}`);
    //         })
    // })
    //
    // useEffect(() => {
    //     api.getUserInfo()
    //         .then((res) => {
    //             setCurrentUser(res);
    //         })
    //         .catch((err) => {
    //             console.log(`Ошибка обновления информации о пользователе: ${err}`);
    //         })
    // }, [])

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
                console.log(`Ошибка обновления информации о пользователе: ${err}`);
            })
    }

    function handleAddPlace(data) {
        api.addUserCard(data)
            .then((newCard) => {
                setCards([newCard, ...cards]);
            })
            .then(() => {
                setAddPlacePopupOpen(false);
            })
            .catch((err) => {
                console.log(`Невозможно опубликовать карту. ${err}`);
            })
    }

    function handleUpdateAvatar(data) {
        api.updateUserAvatar(data)
            .then(res => {
                setCurrentUser(res);
            })
            .then(() => {
                setEditAvatarPopupOpen(false);
            })
            .catch((err) => {
                console.log(`Ошибка обновления аватара пользователя: ${err}`);
            })
    }

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((err) => {
                console.log(`${err}`);
            })
    }


    // Функция удаления карточки, по аналогии с функцией лайка
    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards(cards.filter((item) => item !== card))
            })
            .catch((err) => {
                console.log(`${err}`);
            })
    }


    // Обработчик клика по изображению для открытия popup картинки
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
                        cards={cards}
                        onEditProfile={handleEditProfilePopupOpen}
                        onAddPlace={handleAddPlacePopupOpen}
                        onEditAvatar={handleEditAvatarPopupOpen}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                        isLoading={isLoading}
                    />
                    <Footer/>
                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        buttonText='Сохранить'
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                    />
                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        buttonText='Сохранить'
                        onUpdateAvatar={handleUpdateAvatar}
                    />
                    <AddPlacesPopup
                        onClose={closeAllPopups}
                        buttonText='Сохранить'
                        isOpen={isAddPlacePopupOpen}
                        onAddPlace={handleAddPlace}
                    />
                    <PopupWithForm
                        onClose={closeAllPopups}
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
