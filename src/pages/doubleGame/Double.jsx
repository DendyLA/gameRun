
import GameDouble from './gameDouble/GameDouble';
import UsersBid from '../../components/usersBid/UsersBid';

import './Double.scss'

import paroshutte from '../../assets/img/doubleImg/paroshutte.png'
import sergeant from '../../assets/img/doubleImg/sergeant.png'
import eagle from '../../assets/img/doubleImg/eagle.png'

function Double() {

    return(
        <section className="double">
            <div className="container">
                <div className="title">Режим Double</div>
                <GameDouble />
                <div className="title title__bid">СТАВКИ ИГРОКОВ</div>
                <div className="double__users">
                    <img src={paroshutte} alt="" className="double__usersImg" />
                    <div className="double__usersX">2X</div>
                    <div className="double__usersCost">69.63</div>
                    <div className="double__usersNum">28</div>
                    <div className="double__usersContent">
                    <div className="double__usersContentWrapper">
                        <UsersBid mainColor={'#405CF9'} btnColor={'linear-gradient(90deg, #86D7FD 0%, #3B52CB 100%)'}/>
                        <UsersBid mainColor={'#405CF9'} btnColor={'linear-gradient(90deg, #86D7FD 0%, #3B52CB 100%)'}/>
                        <UsersBid mainColor={'#405CF9'} btnColor={'linear-gradient(90deg, #86D7FD 0%, #3B52CB 100%)'}/>
                        <UsersBid mainColor={'#405CF9'} btnColor={'linear-gradient(90deg, #86D7FD 0%, #3B52CB 100%)'}/>
                        <UsersBid mainColor={'#405CF9'} btnColor={'linear-gradient(90deg, #86D7FD 0%, #3B52CB 100%)'}/>
                    </div>
                    </div>
                    <div className="double__usersButton">See more</div>
                </div>
                <div className="double__users double__users_purple">
                    <img src={sergeant} alt="" className="double__usersImg" />
                    <div className="double__usersX">14X</div>
                    <div className="double__usersCost">5.88</div>
                    <div className="double__usersNum">11</div>
                    <div className="double__usersContent">
                    <div className="double__usersContentWrapper">
                        <UsersBid mainColor={'#C418D7'} btnColor={'linear-gradient(90deg, #FA76F2 0%, #A01BAF 100%)'}/>
                        <UsersBid mainColor={'#C418D7'} btnColor={'linear-gradient(90deg, #FA76F2 0%, #A01BAF 100%)'}/>
                        <UsersBid mainColor={'#C418D7'} btnColor={'linear-gradient(90deg, #FA76F2 0%, #A01BAF 100%)'}/>
                        <UsersBid mainColor={'#C418D7'} btnColor={'linear-gradient(90deg, #FA76F2 0%, #A01BAF 100%)'}/>
                        <UsersBid mainColor={'#C418D7'} btnColor={'linear-gradient(90deg, #FA76F2 0%, #A01BAF 100%)'}/>
                    </div>
                    </div>
                    <div className="double__usersButton double__usersButton_purple">See more</div>
                </div>
                <div className="double__users double__users_yellow">
                    <img src={eagle} alt="" className="double__usersImg" />
                    <div className="double__usersX">2X</div>
                    <div className="double__usersCost">95.32</div>
                    <div className="double__usersNum">15</div>
                    <div className="double__usersContent">
                    <div className="double__usersContentWrapper">
                        <UsersBid mainColor={'#A85E3A'} btnColor={'linear-gradient(90deg, #ECB151 0%, #8C5235 100%)'}/>
                        <UsersBid mainColor={'#A85E3A'} btnColor={'linear-gradient(90deg, #ECB151 0%, #8C5235 100%)'}/>
                        <UsersBid mainColor={'#A85E3A'} btnColor={'linear-gradient(90deg, #ECB151 0%, #8C5235 100%)'}/>
                        <UsersBid mainColor={'#A85E3A'} btnColor={'linear-gradient(90deg, #ECB151 0%, #8C5235 100%)'}/>
                        <UsersBid mainColor={'#A85E3A'} btnColor={'linear-gradient(90deg, #ECB151 0%, #8C5235 100%)'}/>
                    </div>
                    </div>
                    <div className="double__usersButton double__usersButton_yellow">See more</div>
                </div>
            </div>
        </section>
    )
}

export default Double;