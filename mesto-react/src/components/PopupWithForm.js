import React from 'react'

function PopupWithForm(props) {
    return(
        <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button onClick={props.onClose} className="popup__btn-close" type="button" aria-label="Закрыть окно"></button>
                <form onSubmit={props.onSubmit} className="popup__form" name={'${props.name}-form'} noValidate>
                    <h2 className="form-title">{props.title}</h2>
                    <fieldset className="form__items">
                        {props.children}
                    </fieldset>
                <button className="popup__btn-save" type="submit">{props.buttonText}</button>
                </form>
            </div>
        </div>
    );
}
export default PopupWithForm;

// <!--popup редактирования профиля-->
// <article class="popup popup_type_profile">
//     <div class="popup__container">
//         <h2 class="popup__title">Редактировать профиль</h2>
//         <form class="popup__form" name="ChangeNameForm" novalidate>
//             <fieldset class="popup__fieldset">
//                 <input class="popup__input" id='popup-name' maxlength="40" minlength="2"
//                        name="name" required type="text">
//                     <span class="popup__input-error" id="popup-name-error"></span>
//                     <input class="popup__input" id='popup-about' maxlength="200" minlength="2"
//                            name="about" required type="text">
//                         <span class="popup__input-error" id="popup-about-error"></span>
//                         <button class="popup__btn-save" name="submit" type="submit">Сохранить</button>
//             </fieldset>
//         </form>
//         <button aria-label="закрыть форму" class="popup__btn-close" type="button"></button>
//     </div>
// </article>
// <!--popup добавления нового фото-->
// <article class="popup popup_type_add">
//     <div class="popup__container">
//         <h2 class="popup__title">Новое место</h2>
//         <form class="popup__form" name="AddFotoForm" novalidate>
//             <fieldset class="popup__fieldset">
//                 <input class="popup__input" id='popup-add-name' maxlength="40" minlength="2"
//                        name="name" placeholder="Название" required type="text">
//                     <span class="popup__input-error" id="popup-add-name-error"></span>
//                     <input class="popup__input" id='link' maxlength="200" minlength="2"
//                            name="link" placeholder="Ссылка на картинку" required type="url">
//                         <span class="popup__input-error" id="link-error"></span>
//                         <button class="popup__btn-save popup__btn-save_inactive" name="submit"
//                                 type="submit">Создать
//                         </button>
//             </fieldset>
//         </form>
//         <button aria-label="закрыть форму" class="popup__btn-close" type="button"></button>
//     </div>
// </article>
// <!--popup подтверждения удаления карточки-->
// <section class="popup popup_type_delete">
//     <div class="popup__container">
//         <fieldset class="popup__fieldset">
//             <form class="popup__form" novalidate>
//                 <h2 class="popup__title">Вы уверены?</h2>
//                 <button class="popup__btn-save" type="submit">Да</button>
//             </form>
//             <button aria-label="закрыть форму" class="popup__btn-close" type="reset"></button>
//         </fieldset>
//     </div>
// </section>
// <!-- popup изменения аватара-->
// <article class="popup popup_type_avatar">
//     <div class="popup__container">
//         <form class="popup__form" name="Avatar" novalidate>
//             <h2 class="popup__title">Обновить аватар</h2>
//             <fieldset class="popup__fieldset">
//                 <input class="popup__input" id="avatar-link" name="avatarLink" placeholder="Ссылка на картинку"
//                        required
//                        type="url">
//                     <p class='popup__input-error' id='avatar-link-error'></p>
//                     <button class="popup__btn-save " type="submit">Сохранить</button>
//             </fieldset>
//         </form>
//         <button aria-label="Закрыть окно" class="popup__btn-close page__button" type="button"></button>
//     </div>
// </article>