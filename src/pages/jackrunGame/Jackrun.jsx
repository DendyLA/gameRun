
import GameJackrun from './gameJackrun/GameJackrun';
import UsersBid from '../../components/usersBid/UsersBid'

import './Jackrun.scss'


function Jackrun() {

    return(
        <section className="jackrun">
        <div className="container">
            <div className="title jackrun__title">Режим Jackrun</div>
            <GameJackrun />
            <div className="title jackrun__title_user">СТАВКИ ИГРОКОВ</div>
            <div className="jackrun__users">
                <UsersBid />
                <UsersBid />
                <UsersBid />
                <UsersBid />
                <UsersBid />
                <UsersBid />
                <UsersBid />
                <UsersBid />
                <UsersBid />
                <UsersBid />
                <UsersBid />
                <UsersBid />
                <UsersBid />
                <UsersBid />
                <UsersBid />
            </div>
            
        </div>
        </section>
    )
}

export default Jackrun;