

import './UsersBid.scss'

import userPhoto from '../../assets/img/crashImg/user.png'

function UsersBid({mainColor, btnColor}) {
    const colorBid = {
        boxShadow: `4px 4px 10px ${mainColor}`
    }
    const colorStatus = {
        background: `${btnColor}`
    }
    return(
        <div className="usersBid" style={colorBid}>
            <img src={userPhoto} alt="user" className="usersBid__image" />
            <div className="usersBid__skin"><img src={userPhoto} alt="skin" /></div>
            <div className="usersBid__userName">Tuana Ergin</div>
            <div className="usersBid__userBalance">25.95$</div>
            <div className="usersBid__userStatus" style={colorStatus}>В ИГРЕ</div>
        </div>
        
    )
}

export default UsersBid;