

import './Current.scss'

import User from '../../../assets/img/profile/user.png';
import Ship from '../../../assets/img/profile/ship.png';
import Item from '../../../assets/img/profile/item.png';

function Current(){

    return(
        <div className="current">
            <div className="current__status">Live</div>
            <div className="current__title">Race in the maze</div>
            <div className="user">
                <div className="user__photo"> <img src={User} alt="avatar" /> </div>
                <div className="user__info">
                    <div className="user__name">Full name</div>
                    <div className="user__status">Online</div>
                </div>
                
                <div className="user__playersCount">365</div>
            </div>
            <div className="current__image"> <img src={Ship} alt="" /> </div>
            <div className="current__skin">
                <div className="current__skinImg"> <img src={Item} alt="" /> </div>
                <div className="current__skinName">Legend 2</div>
            </div>
            <div className="current__button">Join the steam</div>
        </div>
    )
}

export default Current;