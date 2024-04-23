
import GameJackrun from './gameJackrun/GameJackrun';

import './Jackrun.scss'


function Jackrun() {

    return(
        <section className="jackrun">
        <div className="container">
            <div className="title jackrun__title">Режим Jackrun</div>
            <GameJackrun />
        </div>
        </section>
    )
}

export default Jackrun;