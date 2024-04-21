

import './UsersBid.scss'

import userPhoto from '../../assets/img/crashImg/user.png'

function UsersBid() {

    return(
        <div className="usersBid">
            <img src={userPhoto} alt="user" className="usersBid__image" />
            <div className="usersBid__skin"><img src={userPhoto} alt="skin" /></div>
            <div className="usersBid__userName">Tuana Ergin</div>
            <div className="usersBid__userBalance">25.95$</div>
            <div className="usersBid__userStatus">В ИГРЕ</div>
        </div>
        
    )
}

export default UsersBid;