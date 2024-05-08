
import GameRollrun from './gameRollrun/GameRollrun'
import ActiveGame from './activeGame/ActiveGame'

import './Rollrun.scss'

function Rollrun() {

    return(
        <section className="rollrun">
        <div className="container">
            <div className="title">Режимы Rollrun</div>
            <GameRollrun />
            <div className="title">Активные игры</div>
            <div className="activeWrapper">
                <ActiveGame />
                <ActiveGame />
                <ActiveGame />
                <ActiveGame />
            </div>
        </div>
            
        </section>
    )
}

export default Rollrun