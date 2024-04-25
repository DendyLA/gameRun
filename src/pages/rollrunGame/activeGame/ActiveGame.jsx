

import './ActiveGame.scss'

import pistol from '../../../assets/img/rollrunImg/pistol.png'
import user from '../../../assets/img/rollrunImg/user2.png'
import userSecond from '../../../assets/img/crashImg/user.png'

function ActiveGame() {

    return(
        <div className="activeGame">
            <div className="activeGame__info">
                <div className="activeGame__infoLeft">
                    <div className="activeGame__infoLeftUser"><img src={user} alt="" /> </div>
                    <div className="activeGame__infoLeftInfo">
                        <div className="activeGame__infoLeftInfoName">Shrek1001</div>
                        <div className="activeGame__infoLeftInfoCount">4.22</div>
                        <div className="activeGame__infoLeftInfoDescr">Ставка в игру</div>
                    </div>
                    <div className="activeGame__infoLeftImg"><img src={pistol} alt="" /> </div>
                </div>
                <div className="activeGame__infoMiddle">
                    <div className="activeGame__infoMiddleTitle">Информация об игре</div>
                    <div className="activeGame__infoMiddleInfo">
                        <div className="activeGame__infoMiddleInfoUsers">4</div>
                        <div className="activeGame__infoMiddleInfoMoney">4.22</div>
                        <div className="activeGame__infoMiddleInfoShield"></div>
                    </div>
                </div>
                <div className="activeGame__infoRight">
                <div className="activeGame__infoRightWrapper">
                <div className="activeGame__infoRightUser"> <img src={user} alt="" /> </div>
                    <div className="activeGame__infoRightUser"></div>
                    <div className="activeGame__infoRightUser"></div>
                    <div className="activeGame__infoRightButton">ВОЙТИ</div>
                </div>
                    
                </div>
            </div>
            <div className="activeGame__game">
                <div className="activeGame__gameList">
                    <div className="activeGame__gameListUser"><div className="activeGame__gameListUserDark"></div> <img src={userSecond} alt="" /></div>
                    <div className="activeGame__gameListUser"><div className="activeGame__gameListUserDark"></div><img src={user} alt="" /></div>
                    <div className="activeGame__gameListUser"><div className="activeGame__gameListUserDark"></div> <img src={userSecond} alt="" /></div>
                    <div className="activeGame__gameListUser"><div className="activeGame__gameListUserDark"></div><img src={user} alt="" /></div>
                    <div className="activeGame__gameListUser"><div className="activeGame__gameListUserDark"></div> <img src={userSecond} alt="" /></div>
                    <div className="activeGame__gameListUser"><div className="activeGame__gameListUserDark"></div><img src={user} alt="" /></div>
                    <div className="activeGame__gameListUser"><div className="activeGame__gameListUserDark"></div> <img src={userSecond} alt="" /></div>
                    <div className="activeGame__gameListUser"><img src={user} alt="" /></div>
                    <div className="activeGame__gameListUser"><div className="activeGame__gameListUserDark"></div> <img src={userSecond} alt="" /></div>
                    <div className="activeGame__gameListUser"><div className="activeGame__gameListUserDark"></div><img src={user} alt="" /></div>
                    <div className="activeGame__gameListUser"><div className="activeGame__gameListUserDark"></div> <img src={userSecond} alt="" /></div>
                    <div className="activeGame__gameListUser"><div className="activeGame__gameListUserDark"></div><img src={user} alt="" /></div>
                    <div className="activeGame__gameListUser"><div className="activeGame__gameListUserDark"></div> <img src={userSecond} alt="" /></div>
                    <div className="activeGame__gameListUser"><div className="activeGame__gameListUserDark"></div><img src={user} alt="" /></div>
                    <div className="activeGame__gameListUser"><div className="activeGame__gameListUserDark"></div><img src={user} alt="" /></div>
                </div>

            </div>
        </div>
    )
}

export default ActiveGame;