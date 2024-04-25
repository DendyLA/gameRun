import { Link } from 'react-router-dom';

import './Header.scss'

function Header(){

    return(
        <section className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="logo">Logo <span>Game</span></div> 
                    <nav className="nav">
                        <Link to='/usercab'><a href="" className="nav__item">Главная</a></Link> 
                        <a href="" className="nav__item">Режимы</a>
                        <a href="" className="nav__item">Контакты</a>
                        <a href="" className="nav__item">Помощь</a>
                    </nav>
                    <div className="authentication">
                        <button className="log-in">Войти</button>
                        <button className="sign-up">Зарегистрироваться</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;