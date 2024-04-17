

import './Promo.scss'
import promoKnife from '../../../assets/img/main/promoKnife.png'
function Promo () {

    return(
        <section className="promo">
            <div className="promo__event">
                <div className="promo__event_wrapper"></div>
                <div className="promo__eventStatus">New</div>
                <div className="promo__eventTitle">FREEBET EVENT KATOWICT 2024</div>
                <button className="promo__eventButton">Buy right now</button>
            </div>
            <div className="promo__newUser">
                <div className="promo__text">
                    <div className="promo__title">Promo: Legend Code</div>
                    <div className="promo__descr">For new users</div>
                    <div className="promo__percent">-15%</div>
                    <div className="promo__footer">Only for 3 games</div>
                </div>
                <img src={promoKnife} alt="" className="promo__img" />
            </div>
        </section>
    )
}

export default Promo;