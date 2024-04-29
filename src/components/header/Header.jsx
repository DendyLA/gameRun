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
                        <Link to='/signin'><button className="log-in">Войти</button></Link> 
                        <Link to='/login'><button className="sign-up">Зарегистрироваться</button></Link> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;