
import GameDouble from './gameDouble/GameDouble';

import './Double.scss'

function Double() {

    return(
        <section className="double">
            <div className="container">
                <div className="title">Режим Double</div>
                <GameDouble />
            </div>
        </section>
    )
}

export default Double;