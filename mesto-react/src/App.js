import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <body className="page">
      <header className="header">
        <a href="#">
          <img alt="логотип сайта Место." className="header__logo" src="<%=require('./images/logo.svg')%>"/>
        </a>
      </header>
      <div className="container">
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
        <footer className="footer">
          <p className="footer__copyright">&copy;2021 Mesto Russia</p>
        </footer>

        {/*// popup редактирования профиля*/}

        <article className="popup popup_type_profile">
          <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form" name="ChangeNameForm" noValidate>
              <fieldset className="popup__fieldset">
                <input className="popup__input" id='popup-name' maxLength="40" minLength="2"
                       name="name" required type="text"/>
                  <span className="popup__input-error" id="popup-name-error"></span>
                  <input className="popup__input" id='popup-about' maxLength="200" minLength="2"
                         name="about" required type="text"/>
                    <span className="popup__input-error" id="popup-about-error"></span>
                    <button className="popup__btn-save" name="submit" type="submit">Сохранить</button>
              </fieldset>
            </form>
            <button aria-label="закрыть форму" className="popup__btn-close" type="button"></button>
          </div>
        </article>

        {/*// popup добавления нового фото*/}
        <article className="popup popup_type_add">
          <div className="popup__container">
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__form" name="AddFotoForm" noValidate>
              <fieldset className="popup__fieldset">
                <input className="popup__input" id='popup-add-name' maxLength="40" minLength="2"
                       name="name" placeholder="Название" required type="text" />
                  <span className="popup__input-error" id="popup-add-name-error"></span>
                  <input className="popup__input" id='link' maxLength="200" minLength="2"
                         name="link" placeholder="Ссылка на картинку" required type="url" />
                    <span className="popup__input-error" id="link-error"></span>
                    <button className="popup__btn-save popup__btn-save_inactive" name="submit" type="submit">Создать
                    </button>
              </fieldset>
            </form>
            <button aria-label="закрыть форму" className="popup__btn-close" type="button"></button>
          </div>
        </article>

        {/*// popup открытия полноразмерного фото*/}
        <section className="popup popup_type_show-img" data-type="image">
          <figure className="popup__frame">
            <button aria-label="закрыть форму"
                    className="popup__btn-close popup__btn-close_type_show-image"
                    type="button"></button>
            <img alt="" className="popup__foto" src="#" />
              <p className="popup__image-title"></p>
          </figure>
        </section>

        {/*// popup подтверждения удаления карточки*/}
        <section className="popup popup_type_delete">
          <div className="popup__container">
            <fieldset className="popup__fieldset">
              <form className="popup__form" noValidate>
                <h2 className="popup__title">Вы уверены?</h2>
                <button className="popup__btn-save" type="submit">Да</button>
              </form>
              <button aria-label="закрыть форму" className="popup__btn-close" type="reset"></button>
            </fieldset>
          </div>
        </section>

        {/*//popup изменения аватара*/}
        <article className="popup popup_type_avatar">
          <div className="popup__container">
            <form className="popup__form" name="Avatar" noValidate>
              <h2 className="popup__title">Обновить аватар</h2>
              <fieldset className="popup__fieldset">
                <input className="popup__input" id="avatar-link" name="avatarLink" placeholder="Ссылка на картинку"
                       required
                       type="url" />
                  <p className='popup__input-error' id='avatar-link-error'></p>
                  <button className="popup__btn-save " type="submit">Сохранить</button>
              </fieldset>
            </form>
            <button aria-label="Закрыть окно" className="popup__btn-close page__button" type="button"></button>
          </div>
        </article>
      </div>
      </body>
  );
}

export default App;
