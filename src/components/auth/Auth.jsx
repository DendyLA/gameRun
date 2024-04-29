import { Link } from 'react-router-dom'
import { useState } from 'react'

import './Auth.scss'

import left from '../../assets/img/authImg/left.png'
import check from '../../assets/img/authImg/check.png'
import eye from '../../assets/img/authImg/eye.png'
import facebookIcon from '../../assets/img/authImg/facebook.png'
import steamIcon from '../../assets/img/authImg/steam.png'
import emailIcon from '../../assets/img/authImg/email.png'

function Auth({status}) {
    let [visible, onVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [isvalid, setIsValid] = useState(false);
    const [password, setPassword] = useState('');
    const [isValidPass, setIsValidPass] = useState(false);
    
    const toggleVisible = () => {
        onVisible(!visible)
    }

    //Validation
    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+)(\.[^<>()\[\]\\.,;:\s@"]+)*)@(([^<>()\[\]\\.,;:\s@"]+)(\.[^<>()\[\]\\.,;:\s@"]+)*)$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        // Регулярное выражение для проверки пароля
        const re = /^\w{3,}$/;
        return re.test(password);
    };
    

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setIsValid(validateEmail(newEmail));
    };

    const handlePassChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setIsValidPass(validatePassword(newPassword));
    };

    return(
        <div className='container'>
            <Link to='/'>
                <div className="auth__exit">
                    <div className="auth__exitIcon"><img src={left} alt="" /> </div>
                    <div className="auth__exitDescr">Вернуться</div>
                </div>
            </Link> 
            
            <div className="auth">
                <div className="auth__title">{status === 'login' ? 'Зарегистрироваться' : 'Войти'}</div>

                <form className="auth__form">
                    <div className="auth__formEmail">
                        <label htmlFor="email" className="auth__formEmailDescr">Email</label>
                        <input value={email} onChange={handleEmailChange} required type="email" placeholder='hello@gmail.com' id='email' className={`auth__formEmailInput ${isvalid ? 'borderCheck' : 'borderStop'}`} name='email'/>
                    </div>
                    <div className="auth__formPassword">
                        <label htmlFor="password" className="auth__formPasswordDescr">Пароль</label>
                        <input required value={password} onChange={handlePassChange} id="password" type={visible? 'text' : 'password'} placeholder='Введите ваш пароль' className={`auth__formPasswordInput ${isValidPass ? 'borderCheck' : 'borderStop'}`} name='password'/>
                        <i className={`bi ${visible ? 'bi-eye' : 'bi-eye-slash'}`}  onClick={toggleVisible} id="togglePassword"></i>
                        <a href="#  " className="auth__formPasswordForget">Забыли пароль</a>
                    </div>
                    <div className="auth__formAnother">
                        <div className="auth__formAnotherTitle">
                            {`Или ${status === 'login' ? 'Зарегистрируйтесь' : 'Войти'} с помощью`}
                        </div>
                        <div className="auth__formAnotherItems">
                            <a href="#" className="auth__formAnotherItem"><img src={facebookIcon} alt="" /></a>
                            <a href="#" className="auth__formAnotherItem"><img src={steamIcon} alt="" /></a>
                            <a href="#" className="auth__formAnotherItem"><img src={emailIcon} alt="" /></a>
                        </div>
                    </div>
                    <button className="auth__formButton">{status === 'login' ? 'Зарегистрироваться' : 'Войти'}</button>
                </form>

            </div>
        </div>
    )
}

export default Auth;