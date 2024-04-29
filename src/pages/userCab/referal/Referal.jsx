

import './Referal.scss'

import user from '../../../assets/img/market/user.png'
import copy from '../../../assets/img/market/copy.png'
import link from '../../../assets/img/market/link.png'
import wallet from '../../../assets/img/market/wallet.png'
import money from '../../../assets/img/market/money.png'
import percent from '../../../assets/img/market/percent.png'

function Referal() {

    return(
        <>
            <div className="referal">
            <div className="referal__level">
                <div className="referal__levelNum">1</div>
                <div className="referal__levelTitle">УРОВЕНЬ</div>
                <div className="referal__levelBalance">0.00$ / 200.00$</div>
                <div className="referal__levelDescr">ДО НОВОГО УРОВНЯ</div>
            </div>
            <div className="referal__link">
                <div className="referal__linkLeft">
                    <div className="referal__linkTitle">ПРИГЛАШАЙТЕ ПОЛЬЗОВАТЕЛЕЙ</div>
                    <div className="referal__linkMain">
                        <img src={link} alt="" />
                        <div className="referal__linkMainContent">
                            <div className="referal__linkMainLink">https://cs2run.vip/ref/jgnyrk</div>
                            <div className="referal__linkMainDescr">Реферальная ссылка</div>
                        </div>
                        <img src={copy} alt="" />
                    </div>
                </div>
                <div className="referal__linkUser"><img src={user} alt="" /> </div>
            </div>
            <div className="referal__info">
                <div className="referal__infoMoney referal__infoItem">
                    <img src={money} alt="" />
                    <div className="referal__infoMoneyContent">
                        <div className="referal__infoMoneyContentCount referal__infoCount">0.00$</div>
                        <div className="referal__infoMoneyContentDescr referal__infoDescr">ПОПОЛНЕНИЙ</div>
                    </div>
                </div>
                <div className="referal__infoPercent referal__infoItem">
                    <img src={percent} alt="" />
                    <div className="referal__infoPercentContent">
                        <div className="referal__infoPercentContentCount referal__infoCount">1%</div>
                        <div className="referal__infoPercentContentDescr referal__infoDescr">ПРОЦЕНТ</div>
                    </div>
                </div>
                <div className="referal__infoBalance referal__infoItem">
                    <img src={wallet} alt="" />
                    <div className="referal__infoBalanceContent">
                        <div className="referal__infoBalanceContentCount referal__infoCount">0.00$</div>
                        <div className="referal__infoBalanceContentDescr referal__infoDescr">РЕФ. БАЛАНС</div>
                    </div>
                    <div className="referal__infoBalanceButton">ОБМЕНЯТЬ</div>
                </div>
            </div>
            
        </div>
        
        <div className="title ref__title">Уровни реф. системы</div>
            <div className="ref__levels">
                <div className="ref__levelsHeader">
                    <div className="ref__levelsHeaderLeft">
                        <div className="ref__levelsHeaderDescr">УРОВЕНЬ</div>
                        <div className="ref__levelsHeaderDescr">ПОПОЛНЕНИЙ РЕФЕРАЛАМИ</div>
                    </div>
                    <div className="ref__levelsHeaderRight">
                        <div className="ref__levelsHeaderDescr">ПРОЦЕНТ ОТ ПОПОЛНЕНИЙ</div>
                        <div className="ref__levelsHeaderDescr">РЕФЕРАЛ ПОЛУЧИТ</div>
                    </div>
                </div>
                <div className="ref__levelsContent">
                    <div className="ref__levelsContentItem">
                        <div className="ref__levelsContentItemNum">1</div>
                        <div className="ref__levelsContentItemMoney">0.00$</div>
                        <div className="ref__levelsContentItemPercent">1%</div>
                        <div className="ref__levelsContentItemDeposite">5% к депозиту</div>
                    </div>
                    <div className="ref__levelsContentItem">
                        <div className="ref__levelsContentItemNum">2</div>
                        <div className="ref__levelsContentItemMoney">200.00$</div>
                        <div className="ref__levelsContentItemPercent">2%</div>
                        <div className="ref__levelsContentItemDeposite">5% к депозиту</div>
                    </div>
                    <div className="ref__levelsContentItem">
                        <div className="ref__levelsContentItemNum">3</div>
                        <div className="ref__levelsContentItemMoney">500.00$</div>
                        <div className="ref__levelsContentItemPercent">3%</div>
                        <div className="ref__levelsContentItemDeposite">5% к депозиту</div>
                    </div>
                    <div className="ref__levelsContentItem">
                        <div className="ref__levelsContentItemNum">4</div>
                        <div className="ref__levelsContentItemMoney">1500.00$</div>
                        <div className="ref__levelsContentItemPercent">4%</div>
                        <div className="ref__levelsContentItemDeposite">5% к депозиту</div>
                    </div>
                    <div className="ref__levelsContentItem">
                        <div className="ref__levelsContentItemNum">5</div>
                        <div className="ref__levelsContentItemMoney">3000.00$</div>
                        <div className="ref__levelsContentItemPercent">5%</div>
                        <div className="ref__levelsContentItemDeposite">5% к депозиту</div>
                    </div>
                </div>
            </div>
            <div className="title">Пользователи</div>
            <div className="ref__users">

            </div>
        </>
    )
}

export default Referal;