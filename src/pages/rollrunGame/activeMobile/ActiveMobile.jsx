

import './ActiveMobile.scss';

import user from '../../../assets/img/rollrunImg/user2.png';
import pistol from '../../../assets/img/rollrunImg/pistol.png';
import userSecond from '../../../assets/img/crashImg/user.png'

function ActiveMobile() {

    return(
        <div className="activeMobile">
            <div className="activeMobile__game">
                <div className="activeMobile__gameWrapper">
                    <div className="activeMobile__gameTop">
                        <div className="activeMobile__gameTopUser">
                            <img src={user} alt="" />
                        </div>
                        <div className="activeMobile__gameTopContent">
                            <div className="activeMobile__gameTopContentName">Shrek1001</div>
                            <div className="activeMobile__gameTopContentCount">4.22</div>
                            <div className="activeMobile__gameTopContentDescr">Ставка в игру</div>
                        </div>
                        <div className="activeMobile__gameTopMoney">4.22</div>
                        <div className="activeMobile__gameTopShield"></div>
                    </div>
                    <div className="activeMobile__gameUsers">
                        <div className="activeMobile__gameUsersItem"><div className="dark"></div> <img src={user} alt="" /> </div>
                        <div className="activeMobile__gameUsersItem"><div className="dark"></div> <img src={userSecond} alt="" /> </div>
                        <div className="activeMobile__gameUsersItem"><div className="dark"></div><img src={user} alt="" /> </div>
                        <div className="activeMobile__gameUsersItem"> <img src={userSecond} alt="" /> </div>
                        <div className="activeMobile__gameUsersItem"><div className="dark"></div> <img src={user} alt="" /> </div>
                        <div className="activeMobile__gameUsersItem"><div className="dark"></div> <img src={userSecond} alt="" /> </div>
                        <div className="activeMobile__gameUsersItem"><div className="dark"></div> <img src={user} alt="" /> </div>
                    </div>
                </div>
                
            </div>
            <div className="activeMobile__join">
                <div className="activeMobile__joinTop">
                    <div className="activeMobile__joinTopPistol">
                        <img src={pistol} alt="" />
                    </div>
                    <div className="activeMobile__joinTopContent">
                        <div className="activeMobile__joinTopContentName">Shrek1001</div>
                        <div className="activeMobile__joinTopContentCount">4.22</div>
                        <div className="activeMobile__joinTopContentDescr">Ставка в игру</div>
                    </div>
                    <div className="activeMobile__joinTopMoney">4.22</div>
                    <div className="activeMobile__joinTopShield"></div>
                </div>
                <div className="activeMobile__joinBottom">
                    <div className="activeMobile__joinBottomUsers">
                        <div className="activeMobile__joinBottomUsersItem"><img src={user} alt="" /> </div>
                        <div className="activeMobile__joinBottomUsersItem"></div>
                        <div className="activeMobile__joinBottomUsersItem"></div>
                    </div>
                    <div className="activeMobile__joinBottomButton">ВОЙТИ</div>
                </div>
            </div>
        </div>
    )
}

export default ActiveMobile;