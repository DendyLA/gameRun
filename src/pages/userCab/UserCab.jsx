
import UserMain from './userMain/UserMain';
import Inventory from './inventory/Inventory';
import Market from './market/Market';

import './UserCab.scss'

function UserCab(){

    return(
        <section className="usercab">
            <div className="container">
                <div className="title">Личный кабинет</div>
                <UserMain />
                <div className="title inventory__title">Инвентарь</div>
                <Inventory />
                <div className="title">Маркет скинов</div>
                <Market />
            </div>
            
        </section>
    )
}

export default UserCab;