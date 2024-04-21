
import GameCrash from './gameCrash/GameCrash';
import UsersBid from '../../components/usersBid/UsersBid';

import './Crash.scss'

function Crush() {
    
    return(
        <section className="crash">
        <div className="container">
            <div className="crash__title">Режим Crash</div>
            <GameCrash />
            <div className="crash__title_user">СТАВКИ ИГРОКОВ</div>
            <div className="users">
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

export default Crush;