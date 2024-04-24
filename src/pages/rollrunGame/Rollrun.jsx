
import GameRollrun from './gameRollrun/GameRollrun'

import './Rollrun.scss'

function Rollrun() {

    return(
        <section className="rollrun">
        <div className="container">
            <div className="title">Режимы Rollrun</div>
            <GameRollrun />
        </div>
            
        </section>
    )
}

export default Rollrun