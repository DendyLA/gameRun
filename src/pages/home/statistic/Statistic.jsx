

import './Statistic.scss'


function Statistic() {

    return(
        <section className="statistic">
            <div className="statistic__time">
                <div className="statistic__info">
                    <div className="statistic__timeTitle">Play time</div>
                    <div className="statistic__timeCount">245h 35m</div>
                    <div className="statistic__timeDate">since 21.03.2024</div>
                </div>
                <div className="statistic__timeGraphic"></div>
            </div>
            <div className="statistic__earn">
                <div className="statistic__earnTitle">How many played</div>
                <div className="statistic__earnSum">1 456 789 $</div>
            </div>
            <div className="statistic__victory">
                <div className="statistic__victoryTitle">Victory</div>
                <div className="statistic__victorySum">145</div>
                <div className="statistic__victoryDescr">80% of all games</div>
            </div>
            <div className="statistic__lose">
                <div className="statistic__loseTitle">Lose</div>
                <div className="statistic__loseSum">25</div>
                <div className="statistic__loseDescr">20% of all games</div>
            </div>
            <div className="statistic__exp">
                <div className="statistic__expTitle">Points XP</div>
                <div className="statistic__expSum">1 456 789</div>
                <div className="statistic__expDescr">for 457 games</div>
            </div>
        </section>
    )
}

export default Statistic;