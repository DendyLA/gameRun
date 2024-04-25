
import UserMain from './userMain/UserMain';

import './UserCab.scss'

function UserCab(){

    return(
        <section className="usercab">
            <div className="container">
                <div className="title">Личный кабинет</div>
                <UserMain />
            </div>
            
        </section>
    )
}

export default UserCab;