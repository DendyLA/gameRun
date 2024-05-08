import React, { useState, useEffect, useRef } from 'react'

import './GameJackrun.scss'

import InventoryMobile from '../../../components/inventoryMobile/InventoryMobile'

import userPhoto from '../../../assets/img/crashImg/user.png'
import userIcon from '../../../assets/img/profile/user.png'

function GameJackrun() {
    

    return(
        <div className="jackrun__wrapper">
            <div className="jackrun__game">
                <div className="jackrun__gameActivity">
                    <div className="jackrun__gameActivityCount">8.49s</div>
                    <div className="jackrun__gameActivityDescr">До начала раунда</div>
                    <div className="jackrun__gameActivityRoll">
                        <div className="jackrun__gameActivityRollUser"><img src={userPhoto} alt="" /> </div>
                        <div className="jackrun__gameActivityRollUser"><img src={userPhoto} alt="" /> </div>
                        <div className="jackrun__gameActivityRollUser"><img src={userPhoto} alt="" /> </div>
                        <div className="jackrun__gameActivityRollUser"><img src={userPhoto} alt="" /> </div>
                        <div className="jackrun__gameActivityRollUser"><img src={userPhoto} alt="" /> </div>
                        <div className="jackrun__gameActivityRollUser"><img src={userPhoto} alt="" /> </div>
                        <div className="jackrun__gameActivityRollUser"><img src={userPhoto} alt="" /> </div>
                        <div className="jackrun__gameActivityRollUser"><img src={userPhoto} alt="" /> </div>
                        <div className="jackrun__gameActivityRollUser"><img src={userPhoto} alt="" /> </div>
                        {/* <div className="jackrun__gameActivityRollWinner"></div> */}
                    </div>
                </div>
                <div className="jackrun__gameInfo">
                    <div className="jackrun__gameInfoMoney"><span>БАНК:</span> 222.00$</div>
                    <div className="jackrun__gameInfoUsers"><span>ИГРОКОВ:</span> 143</div>
                    <div className="jackrun__gameInfoSkins"><span>СКИНОВ:</span> 157</div>
                </div>
                <div className="jackrun__gameInfo jackrun__gameInfo_bottom">
                    <div className="jackrun__gameInfoMoney jackrun__gameInfoMoneyNoContent"><span>Шанс: </span> 41.32%</div>
                    <div className="jackrun__gameInfoUsers jackrun__gameInfoUsersNoContent"><span>Билет:</span> #115</div>
                    <div className="jackrun__gameInfoSkins jackrun__gameInfoSkinsNoContent"><span>Ставка:</span> 1.00</div>
                </div>
            </div>
            <div className="jackrun__bid">
                <div className="jackrun__bidInfo">
                    <div className="jackrun__bidWrapper"></div>
                    <div className="jackrun__bidTitle">Удача дня</div>
                    <div className="jackrun__bidDescr">Самый крупный выигрыш</div>
                    <div className="jackrun__bidCost">10.00</div>
                    <div className="jackrun__bidUser">
                        <div className="jackrun__bidUserIcon"><img src={userIcon} alt="" /> </div>
                        <div className="Jackrun__bidUserInfo">
                            <div className="jackrun__bidUserName">EnOTiK Play</div>
                            <div className="jackrun__bidUserPoint">39.83</div>
                        </div>
                    </div>
                </div>
                <div className="jackrun__bidMain">
                    <div className="jackrun__bidMainTitle">ВАША СТАВКА В ТЕКУЩЕМ РАУНДЕ</div>
                    <div className="jackrun__bidMainCountWrapper">
                        <div className="jackrun__bidMainCount">0.00</div>{/*inputs must be*/}
                    </div>
                    <div className="jackrun__bidMainPercentWrapper">
                        <div className="jackrun__bidMainPercent">0.00%</div>{/*inputs must be */}
                    </div>
                    <div className="jackrun__bidMainButton">СДЕЛАТЬ СТАВКУ</div>
                </div>
            </div>
            <div className="jackrun__inventory">
                <div className="jackrun__inventoryWrapper">
                        <div className="jackrun__inventoryActivity">
                            <div className="jackrun__inventoryTitle">ИНВЕНТАРЬ</div>
                            <div className="jackrun__inventoryActivityTotal">
                                <div className="jackrun__inventoryActivityTotalBalance">0.00$</div>
                                <div className="jackrun__inventoryActivityTotalDescr">БАЛАНС</div>
                            </div>
                            <div className="jackrun__inventoryActivitySelected">
                                <div className="jackrun__inventoryActivityTotalBalance">0.00$</div>
                                <div className="jackrun__inventoryActivityTotalDescr">ВЫБРАНО СКИНОВ</div>
                            </div>
                            <button className="jackrun__inventoryActivityMarket">МАРКЕТ</button>
                            <button className="jackrun__inventoryActivityTake">ВЫВЕСТИ</button>
                        </div>
                        <div className="jackrun__inventoryItems">
                            <div className="jackrun__inventoryItem">
                                <div className="jackrun__inventoryItemMain">
                                    <div className="jackrun__inventoryItemAdd">
                                        <div className="jackrun__inventoryItemAddIcon"></div>
                                    </div>
                                    <div className="jackrun__inventoryItemDescr">КУПИТЬ СКИН</div>
                                </div>
                                <div className="jackrun__inventoryItemButton">
                                    <div className="jackrun__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                    <div className="jackrun__inventoryItemCost">0.25$</div>
                                </div>
                            </div>
                        </div>
                        <div className="jackrun__inventoryItems">
                            <div className="jackrun__inventoryItem">
                                <div className="jackrun__inventoryItemMain">
                                    <div className="jackrun__inventoryItemAdd">
                                        <div className="jackrun__inventoryItemAddIcon"></div>
                                    </div>
                                    <div className="jackrun__inventoryItemDescr">КУПИТЬ СКИН</div>
                                </div>
                                <div className="jackrun__inventoryItemButton">
                                    <div className="jackrun__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                    <div className="jackrun__inventoryItemCost">1.00$</div>
                                </div>
                            </div>
                        </div>
                        <div className="jackrun__inventoryItems">
                            <div className="jackrun__inventoryItem">
                                <div className="jackrun__inventoryItemMain">
                                    <div className="jackrun__inventoryItemAdd">
                                        <div className="jackrun__inventoryItemAddIcon"></div>
                                    </div>
                                    <div className="jackrun__inventoryItemDescr">КУПИТЬ СКИН</div>
                                </div>
                                <div className="jackrun__inventoryItemButton">
                                    <div className="jackrun__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                    <div className="jackrun__inventoryItemCost">5.00$</div>
                                </div>
                            </div>
                        </div>
                        <div className="jackrun__inventoryItems">
                            <div className="jackrun__inventoryItem">
                                <div className="jackrun__inventoryItemMain">
                                    <div className="jackrun__inventoryItemAdd">
                                        <div className="jackrun__inventoryItemAddIcon"></div>
                                    </div>
                                    <div className="jackrun__inventoryItemDescr">КУПИТЬ СКИН</div>
                                </div>
                                <div className="jackrun__inventoryItemButton">
                                    <div className="jackrun__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                    <div className="jackrun__inventoryItemCost">10.00$</div>
                                </div>
                            </div>
                        </div>
                        <div className="jackrun__inventoryItems">
                            <div className="jackrun__inventoryItem">
                                <div className="jackrun__inventoryItemMain">
                                    <div className="jackrun__inventoryItemAdd">
                                        <div className="jackrun__inventoryItemAddIcon"></div>
                                    </div>
                                    <div className="jackrun__inventoryItemDescr">КУПИТЬ СКИН</div>
                                </div>
                                <div className="jackrun__inventoryItemButton">
                                    <div className="jackrun__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                    <div className="jackrun__inventoryItemCost">0.25$</div>
                                </div>
                            </div>
                        </div>
                        <div className="jackrun__inventoryItems">
                            <div className="jackrun__inventoryItem">
                                <div className="jackrun__inventoryItemMain">
                                    <div className="jackrun__inventoryItemAdd">
                                        <div className="jackrun__inventoryItemAddIcon"></div>
                                    </div>
                                    <div className="jackrun__inventoryItemDescr">КУПИТЬ СКИН</div>
                                </div>
                                <div className="jackrun__inventoryItemButton">
                                    <div className="jackrun__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                    <div className="jackrun__inventoryItemCost">0.25$</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <InventoryMobile />
        </div>
    )
}

export default GameJackrun;