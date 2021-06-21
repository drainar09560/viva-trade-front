import React from 'react';
import './index.scss'
import PhoneItem from '../PhoneItem/PhoneItem'
// import logo from '../../assets/ph.png'
import logo from '../../assets/logoV.jpg'
import signup from '../../assets/signup.svg'
import signin from '../../assets/signin.svg'
import emailjs from 'emailjs-com'

function Header() {

    const sendEmail = (e) => {
        try{
            e.preventDefault();
            emailjs.sendForm('service_d7mvd0i', 'template_gdeh5md', e.target, 'user_t2JPGxYagFqgqPHKonU4v')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            alert('Сообщение успшено отправлено!')
        }catch (e) {
            alert('Произлошла ошибка, попробуйте позже.')
        }
    }

    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="header-top">
                    <div className="header-top-wrapper container">
                        <PhoneItem title={"Для регионов России"} number={"+7 (922) 888 05 55"} />
                        <PhoneItem title={"E-mail"} number={"info@vivatrade.ru"} />
                        <a href="/admin"><img src={signup} alt="" className="header-top-btn header-logon"/></a>
                        <img src={signin} alt="" className="header-top-btn header-reg"/>
                    </div>
                </div>
                <div className="header-middle">
                    <div className="header-middle-wrapper container">
                        <img src={logo} alt="" className="header-logo"/>
                        <h1>Вива-Метал. Сварочные и монтажные работы</h1>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-wrapper container">
                        <p className="header-bottom-nav">Все разделы</p>
                        <p className="header-bottom-nav">О нас</p>
                        <p className="header-bottom-nav">Наши услуги</p>
                        <p className="header-bottom-nav">Галерея</p>
                        <p className="header-bottom-nav">Контакты</p>
                        <form onSubmit={sendEmail}>
                            <input type="text" name="name1"/>
                            <input type="text" name="name2"/>
                            <input type="text" name="name3"/>
                            <input type="submit" value="Send"/>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;