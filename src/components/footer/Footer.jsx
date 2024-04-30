

import './Footer.scss'

function Footer() {

    return(
        <section className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__title">Контакты</div>
                    <div className="footer__contacts" id='contact'>
                        <button className="footer__contact">Gmail</button>
                        <button className="footer__contact">Telegram</button>
                        <button className="footer__contact">WhatsApp</button>
                        <button className="footer__contact">Вконтакте</button>
                        <button className="footer__contact">Instagram</button>
                    </div>
                    <div className="footer__descr">MYCOMPANY © 2024-2025</div>
                    <div className="footer__polit">Политика конфиденциальности</div>
                </div>
            </div>
        </section>
    )
}

export default Footer;