

import './GameDouble.scss'

//photo

import paroshutte from '../../../assets/img/doubleImg/paroshutte.png'
import sergeant from '../../../assets/img/doubleImg/sergeant.png'
import eagle from '../../../assets/img/doubleImg/eagle.png'

function GameDouble() {

    return(
        <div className="double__wrapper">
            <div className="double__game">
                <div className="double__gameActivity">
                    <div className="double__gameActivityCount">8.49s</div>
                    <div className="double__gameActivityDescr">До начала раунда</div>
                    <div className="double__gameActivityRoll">
                        <img src={paroshutte} alt="" className="double__gameActivityRollItem" />
                        <img src={sergeant} alt="" className="double__gameActivityRollItem" />
                        <img src={eagle} alt="" className="double__gameActivityRollItem" />
                        <img src={paroshutte} alt="" className="double__gameActivityRollItem" />
                        <img src={sergeant} alt="" className="double__gameActivityRollItem" />
                        <img src={eagle} alt="" className="double__gameActivityRollItem" />
                        <img src={paroshutte} alt="" className="double__gameActivityRollItem" />
                    </div>
                </div>
                <div className="double__gameInfo">
                    <div className="double__gameInfoMoney"><span>БАНК:</span> 222.00$</div>
                    <div className="double__gameInfoUsers"><span>ИГРОКОВ:</span> 143</div>
                    <div className="double__gameInfoSkins"><span>СКИНОВ:</span> 157</div>
                </div>
                <div className="double__gameLast">
                    <div className="double__gameLastTitle">ПОСЛЕДНИЕ 100:</div>
                    <div className="double__gameLastInfo">
                        <img src={paroshutte} alt="" className="double__gameLastImg" />
                        <div className="double__gameLastCount">44</div>
                    </div>
                    <div className="double__gameLastInfo">
                        <img src={sergeant} alt="" className="double__gameLastImg" />
                        <div className="double__gameLastCount">47</div>
                    </div>
                    <div className="double__gameLastInfo">
                        <img src={eagle} alt="" className="double__gameLastImg" />
                        <div className="double__gameLastCount">9</div>
                    </div>
                </div>
            </div>
            <div className="double__bid">
                <div className="double__bidJackpot">
                    <div className="double__bidJackpotWrapper"></div>
                    <div className="double__bidJackpotTitle">Джекпот</div>
                    <div className="double__bidJackpotCost">9.98</div>
                    <div className="double__bidJackpotDescr">Комбинация для джекпота</div>
                    <div className="double__bidJackpotIcons">
                        <div className="double__bidJackpotIcon"><img src={paroshutte} alt="" /></div>
                        <div className="double__bidJackpotIcon"><img src={sergeant} alt="" /></div>
                        <div className="double__bidJackpotIcon"><img src={eagle} alt="" /></div>
                    </div>
                </div>
                <div className="double__bidMain">
                    <div className="double__bidMainSetting"></div>
                    <div className="double__bidMainTitle">ВЫБЕРИТЕ ЦВЕТ</div>
                    <div className="double__bidMainInfo">
                        <div className="double__bidMainInfoItem">
                            <img src={paroshutte} alt="" />
                            <div className="double__bidMainInfoItemCost">12.22</div>
                            <div className="double__bidMainInfoItemX">2X</div>
                        </div>
                        <div className="double__bidMainInfoItem">
                            <img src={sergeant} alt="" />
                            <div className="double__bidMainInfoItemCost">8.75</div>
                            <div className="double__bidMainInfoItemX">14X</div>
                        </div>
                        <div className="double__bidMainInfoItem">
                            <img src={eagle} alt="" />
                            <div className="double__bidMainInfoItemCost">59.48</div>
                            <div className="double__bidMainInfoItemX">2X</div>
                        </div>
                    </div>
                    <div className="double__bidMainButton">СДЕЛАТЬ СТАВКУ</div>
                </div>
            </div>
            <div className="double__inventory">
                <div className="double__inventoryWrapper">
                        <div className="double__inventoryActivity">
                            <div className="double__inventoryTitle">ИНВЕНТАРЬ</div>
                            <div className="double__inventoryActivityTotal">
                                <div className="double__inventoryActivityTotalBalance">0.00$</div>
                                <div className="double__inventoryActivityTotalDescr">БАЛАНС</div>
                            </div>
                            <div className="double__inventoryActivitySelected">
                                <div className="double__inventoryActivityTotalBalance">0.00$</div>
                                <div className="double__inventoryActivityTotalDescr">ВЫБРАНО СКИНОВ</div>
                            </div>
                            <button className="double__inventoryActivityMarket">МАРКЕТ</button>
                            <button className="double__inventoryActivityTake">ВЫВЕСТИ</button>
                        </div>
                        <div className="double__inventoryItems">
                            <div className="double__inventoryItem">
                                <div className="double__inventoryItemMain">
                                    <div className="double__inventoryItemAdd">
                                        <div className="double__inventoryItemAddIcon"></div>
                                    </div>
                                    <div className="double__inventoryItemDescr">КУПИТЬ СКИН</div>
                                </div>
                                <div className="double__inventoryItemButton">
                                    <div className="double__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                    <div className="double__inventoryItemCost">0.25$</div>
                                </div>
                            </div>
                        </div>
                        <div className="double__inventoryItems">
                            <div className="double__inventoryItem">
                                <div className="double__inventoryItemMain">
                                    <div className="double__inventoryItemAdd">
                                        <div className="double__inventoryItemAddIcon"></div>
                                    </div>
                                    <div className="double__inventoryItemDescr">КУПИТЬ СКИН</div>
                                </div>
                                <div className="double__inventoryItemButton">
                                    <div className="double__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                    <div className="double__inventoryItemCost">1.00$</div>
                                </div>
                            </div>
                        </div>
                        <div className="double__inventoryItems">
                            <div className="double__inventoryItem">
                                <div className="double__inventoryItemMain">
                                    <div className="double__inventoryItemAdd">
                                        <div className="double__inventoryItemAddIcon"></div>
                                    </div>
                                    <div className="double__inventoryItemDescr">КУПИТЬ СКИН</div>
                                </div>
                                <div className="double__inventoryItemButton">
                                    <div className="double__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                    <div className="double__inventoryItemCost">5.00$</div>
                                </div>
                            </div>
                        </div>
                        <div className="double__inventoryItems">
                            <div className="double__inventoryItem">
                                <div className="double__inventoryItemMain">
                                    <div className="double__inventoryItemAdd">
                                        <div className="double__inventoryItemAddIcon"></div>
                                    </div>
                                    <div className="double__inventoryItemDescr">КУПИТЬ СКИН</div>
                                </div>
                                <div className="double__inventoryItemButton">
                                    <div className="double__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                    <div className="double__inventoryItemCost">10.00$</div>
                                </div>
                            </div>
                        </div>
                        <div className="double__inventoryItems">
                            <div className="double__inventoryItem">
                                <div className="double__inventoryItemMain">
                                    <div className="double__inventoryItemAdd">
                                        <div className="double__inventoryItemAddIcon"></div>
                                    </div>
                                    <div className="double__inventoryItemDescr">КУПИТЬ СКИН</div>
                                </div>
                                <div className="double__inventoryItemButton">
                                    <div className="double__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                    <div className="double__inventoryItemCost">0.25$</div>
                                </div>
                            </div>
                        </div>
                        <div className="double__inventoryItems">
                            <div className="double__inventoryItem">
                                <div className="double__inventoryItemMain">
                                    <div className="double__inventoryItemAdd">
                                        <div className="double__inventoryItemAddIcon"></div>
                                    </div>
                                    <div className="double__inventoryItemDescr">КУПИТЬ СКИН</div>
                                </div>
                                <div className="double__inventoryItemButton">
                                    <div className="double__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                    <div className="double__inventoryItemCost">0.25$</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default GameDouble;