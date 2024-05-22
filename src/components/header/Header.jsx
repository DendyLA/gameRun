import { Link } from 'react-router-dom';
import { useState } from 'react'

import './Header.scss'

function Header(){
    let [active, setActive] = useState(false);

    const toggleActive = () =>{
        setActive(!active)
    }

    const handleLinkClick = (event,id) => {
        event.preventDefault(); // Предотвратить переход по ссылке
        scrollToElement(id);
    };

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with id "${id}" not found.`);
        }
    };


    return(
        <section className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="logo">Logo <span>Game</span></div> 
                    <nav className="nav">
                        <Link to='/usercab'><a href="" className="nav__item">Главная</a></Link> 
                        <a onClick={() => handleLinkClick(event, 'game')} href="#game" className="nav__item">Режимы</a>
                        <a href="#contact" onClick={() => handleLinkClick(event, 'contact')} className="nav__item">Контакты</a>
                        <a href="#contact" onClick={() => handleLinkClick(event, 'contact')} className="nav__item">Помощь</a>
                    </nav>
                    <div className="authentication">
                        <Link to='/signin'><button className="log-in">Войти</button></Link> 
                        <Link to='/login'><button className="sign-up">Зарегистрироваться</button></Link> 
                    </div>
                </div>
            </div>



            <div className="logo__mobile">Logo <span>Game</span></div>
            <div className="nav__mobileBtn bi bi-list" onClick={toggleActive}></div>
                
                <nav className={`nav__mobile ${active ? 'nav__active' : ''}`}>
                    <Link to='/usercab'><a href="" className="nav__mobile_nav__item">Главная</a></Link> 
                    <a onClick={() => handleLinkClick(event, 'game')} href="#game" className="nav__mobile_nav__item">Режимы</a>
                    <a href="#contact" onClick={() => handleLinkClick(event, 'contact')} className="nav__mobile_nav__item">Контакты</a>
                    <a href="#contact" onClick={() => handleLinkClick(event, 'contact')} className="nav__mobile_nav__item">Помощь</a>
                    <div className="nav__mobile_authentication">
                        <Link to='/signin'><button className="nav__mobile_log-in">Войти</button></Link> 
                        <Link to='/login'><button className="nav__mobile_sign-up">Зарегистрироваться</button></Link> 
                    </div>
                </nav>
        </section>
    )
}

export default Header;