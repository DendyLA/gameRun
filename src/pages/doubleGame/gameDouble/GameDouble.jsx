

import './GameDouble.scss'

//photo

import paroshutte from '../../../assets/img/doubleImg/paroshutte.png'
import sergeant from '../../../assets/img/doubleImg/sergeant.png'
import eagle from '../../../assets/img/doubleImg/eagle.png'

function GameDouble() {

    return(
        <div className="double__wrapper">
            <div className="double__game">
                <div className="double__gameActivity">
                    <div className="double__gameActivityCount">8.49s</div>
                    <div className="double__gameActivityDescr">До начала раунда</div>
                    <div className="double__gameActivityRoll">
                        <img src={paroshutte} alt="" className="double__gameActivityRollItem" />
                        <img src={sergeant} alt="" className="double__gameActivityRollItem" />
                        <img src={eagle} alt="" className="double__gameActivityRollItem" />
                        <img src={paroshutte} alt="" className="double__gameActivityRollItem" />
                        <img src={sergeant} alt="" className="double__gameActivityRollItem" />
                        <img src={eagle} alt="" className="double__gameActivityRollItem" />
                        <img src={paroshutte} alt="" className="double__gameActivityRollItem" />
                    </div>
                </div>
                <div className="double__gameInfo">
                    <div className="double__gameInfoMoney"><span>БАНК:</span> 222.00$</div>
                    <div className="double__gameInfoUsers"><span>ИГРОКОВ:</span> 143</div>
                    <div className="double__gameInfoSkins"><span>СКИНОВ:</span> 157</div>
                </div>
                <div className="double__gameLast">
                    <div className="double__gameLastTitle">ПОСЛЕДНИЕ 100:</div>
                    <div className="double__gameLastInfo">
                        <img src={paroshutte} alt="" className="double__gameLastImg" />
                        <div className="double__gameLastCount">44</div>
                    </div>
                    <div className="double__gameLastInfo">
                        <img src={sergeant} alt="" className="double__gameLastImg" />
                        <div className="double__gameLastCount">47</div>
                    </div>
                    <div className="double__gameLastInfo">
                        <img src={eagle} alt="" className="double__gameLastImg" />
                        <div className="double__gameLastCount">9</div>
                    </div>
                </div>
            </div>
            <div className="double__bid">
                <div className="double__bidJackpot"></div>
                <div className="double__bidMain"></div>
            </div>
            <div className="double__inventory"></div>
        </div>
    )
}

export default GameDouble;