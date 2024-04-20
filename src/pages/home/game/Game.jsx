

import './Game.scss'
import Lock from '../../../assets/icon/lock.png'

function Game({photo, name, statistic, available}) {
    //добавляем фото
    const gameStyle = {
        backgroundImage: `url(${photo})`
    }
    //Добавляем класс для замка
    const statusClass = statistic ? 'game__statistic' : 'game__statisticNotStatus'
    //Тут цифра с статусом и замок
    const stat = statistic ? statistic : <img src={Lock} alt="lock" />
    //НАДПИСЬ ДЛЯ скоро...
    const upcoming = available ? '' : <div className="game__upcoming">СКОРО...</div>
    
    return(
        <div className="game" style={gameStyle}>
            <div className="game__wrapper"></div>
            <div className={statusClass}>{stat}</div>
            <div className="game__name">{name}</div>
            {upcoming}
        </div>
    )
}

export default Game;