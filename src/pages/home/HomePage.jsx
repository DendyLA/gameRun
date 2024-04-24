import {Link} from 'react-router-dom'

//homepage components
import Promo from './promo/Promo'
import Game from './game/Game'
import Current from './current/Current';
import Statistic from './statistic/Statistic';

//pages
import Crash from '../crashGame/Crash';
import Double from '../doubleGame/Double';

import './HomePage.scss'

//фото временно
import DoublePhoto from "../../assets/img/games/double.png"
import Cases from "../../assets/img/games/cases.png"
import JackrunPhoto from "../../assets/img/games/jackrun.png"
import NextGame from "../../assets/img/games/nextGame.png"
import RollRun from "../../assets/img/games/rollRun.png"

import CrashPhoto from "../../assets/img/games/crash.png"




function HomePage() {
    
    return(
        <div className="container">
            <Promo />
            <div className="games__title">Режимы</div>
            <div className="games__line"></div>
            <div className="games">

                <Link to="/crash"><Game photo={CrashPhoto} name='Crash' statistic={272} available={true}/></Link>
                <Link to='/double'><Game photo={DoublePhoto} name='Double' statistic={126} available={true}/></Link> 
                <Link to='/jackrun'><Game photo={JackrunPhoto} name='Jackrun' statistic={28} available={true}/></Link> 
                <Link to='/rollrun'><Game photo={RollRun} name='RollRun' statistic={52} available={true}/></Link> 
                <Game photo={Cases} name='Cases' statistic={''} available={false}/>
                <Game photo={NextGame} name='Next game' statistic={''} available={false}/>
            </div>
            <Current />
            <Statistic />
        </div>

    )
}

export default HomePage