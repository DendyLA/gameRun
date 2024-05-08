

import './UserMain.scss'

import user from '../../../assets/img/profile/user.png'
import notification from '../../../assets/img/userCab/notification.png'
import door from '../../../assets/img/userCab/door.png'
import link from '../../../assets/img/userCab/link.png'
import danger from '../../../assets/img/userCab/danger.png'
import no from '../../../assets/img/userCab/no.png'
import approve from '../../../assets/img/userCab/approve.png'

function UserMain() {

    return(
        <div className="userMain">
            <div className="userMain__info">
                <div className="userMain__infoTop">
                    <div className="userMain__infoTopUser">
                        <img src={user} alt="" className="userMain__infoTopUserImg" />
                        <div className="userMain__infoTopUserName">Full Name</div>
                    </div>
                    <div className="userMain__infoTopButtons">
                        <div className="userMain__infoTopId"><div className="userMain__infoTopIdDescr">ID: 2997683</div> </div>
                        <div className="userMain__infoTopNotification"><img src={notification} alt="" /> </div>
                        <div className="userMain__infoTopExit"><img src={door} alt="" /> </div>
                    </div>
                    
                </div>
                <div className="userMain__infoBottom">
                    <div className="userMain__infoBottomTrade">
                        <div className="userMain__infoBottomTradeLink">
                            <div className="userMain__infoBottomTradeLinkIcon"><img src={link} alt="" /></div>
                            <div className="userMain__infoBottomTradeLinkDescr">TRADE URL ССЫЛКА</div>
                        </div>
                        <div className="userMain__infoBottomTradeDanger">
                            <div className="userMain__infoBottomTradeDangerIcon"><img src={danger} alt="" /> </div>
                            <div className="userMain__infoBottomTradeDangerDescr">Ошибка</div>
                        </div>
                    </div>
                    <div className="userMain__infoBottomExit">
                        <div className="userMain__infoBottomExitIcon"><img src={no} alt="" /></div>
                        <div className="userMain__infoBottomExitDescr">ВЫЙТИ СО СВЕХ УСТРОЙСТВ</div>
                    </div>
                </div>
            </div>
            <div className="userMain__promo">
                <span className="userMain__promoTitle">Промо-код</span>
                <div className="userMain__promoDescr">Специальный / Обычный</div>
                <form action="" className="userMain__promoForm">
                <label >
                    <input type="text"  placeholder='Введите код'/>
                </label>
                    <button><img src={approve} alt="" /> </button>
                </form>
            </div>
            <div className="userMain__balance">
                <div className="userMain__balanceCount">0.00$</div>
                <div className="userMain__balanceDescr">Баланс аккаунта</div>
                <div className="userMain__balanceButton">ПОПОЛНИТЬ</div>
            </div>
        </div>
    )
}

export default UserMain;