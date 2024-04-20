

import Promo from './promo/Promo'
import Game from './game/Game'
import Current from './current/Current';
import Statistic from './statistic/Statistic';

import './HomePage.scss'

//фото временно
import Double from "../../assets/img/games/double.png"
import Cases from "../../assets/img/games/cases.png"
import Jackrun from "../../assets/img/games/jackrun.png"
import NextGame from "../../assets/img/games/nextGame.png"
import RollRun from "../../assets/img/games/rollRun.png"
import Crash from "../../assets/img/games/crash.png"


function HomePage() {
    
    return(
        <div className="container">
            <Promo />
            <div className="games__title">Режимы</div>
            <div className="games__line"></div>
            <div className="games">
                <Game photo={Crash} name='Crash' statistic={272} available={true}/>
                <Game photo={Double} name='Double' statistic={126} available={true}/>
                <Game photo={Jackrun} name='Jackrun' statistic={28} available={true}/>
                <Game photo={RollRun} name='RollRun' statistic={52} available={true}/>
                <Game photo={Cases} name='Cases' statistic={''} available={false}/>
                <Game photo={NextGame} name='Next game' statistic={''} available={false}/>
            </div>
            <Current />
            <Statistic />
        </div>

    )
}

export default HomePage