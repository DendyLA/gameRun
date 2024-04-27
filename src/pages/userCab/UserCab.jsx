
import UserMain from './userMain/UserMain';
import Inventory from './inventory/Inventory';
import Market from './market/Market';
import Referal from './referal/Referal'

import './UserCab.scss'

import list from '../../assets/img/market/list.png'

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
                <div className="title transaction__title">Транзакции</div>
                <div className="usercab__transaction">
                    <img src={list} alt="" />
                    <div className="usercab__transactionDescr">У ВАС ЕЩЕ НЕ БЫЛО ТРАНЗАКЦИЙ</div>
                </div>
                <div className="title">РЕФ.СИСТЕМА</div>
                <Referal />
            </div>
            
        </section>
    )
}

export default UserCab;