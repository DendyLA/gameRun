
import React, { useState, useEffect } from 'react'
import './GameCrash.scss'

import InventoryMobile from '../../../components/inventoryMobile/InventoryMobile'

import gameWay from '../../../assets/img/crashImg/gameWay.png'
import gameWayRed from '../../../assets/img/crashImg/gameWayRed.png'
import weapons from '../../../assets/img/crashImg/weapons.png'
import settings from '../../../assets/icon/crushGame/setting.png'

function GameCrash() {
    // Состояния компонента
    const [isAnimating, setIsAnimating] = useState(true);
    const [translateY, setTranslateY] = useState(0);
    const [counter, setCounter] = useState(0.10); // Начальное значение counter
    const [countdown, setCountdown] = useState(30);
    const [isCountingDown, setIsCountingDown] = useState(false);
    const [randomLimit, setRandomLimit] = useState(generateRandomLimit());

    // Генерация случайного значения между 0.10 и 53.80
    function generateRandomLimit() {
        return parseFloat((Math.random() * (53.80 - 0.10) + 0.10).toFixed(2));
    }

    // Функция для остановки анимации
    const stopAnimation = () => {
        setIsAnimating(false);
        setIsCountingDown(true);
        setCountdown(30);

        // Интервал для обратного отсчета
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => {
                const newCountdown = prevCountdown - 1;
                if (newCountdown <= 0) {
                    setIsAnimating(true);
                    setIsCountingDown(false);
                    setCountdown(30);
                    setTranslateY(0);
                    setCounter(0.10);
                    setRandomLimit(generateRandomLimit());
                    clearInterval(countdownInterval);
                }
                return newCountdown;
            });
        }, 1000);
    };

    // Хук useEffect для управления анимацией и таймерами
    useEffect(() => {
        let animationInterval;

        if (isAnimating) {
            // Интервал для увеличения counter и translateY
            animationInterval = setInterval(() => {
                setCounter((prevCounter) => {
                    const newCounter = prevCounter + 0.10;
                    if (newCounter >= randomLimit) {
                        stopAnimation();
                    }
                    return newCounter;
                });

                setTranslateY((prevTranslateY) => prevTranslateY - 1);
                
                if (translateY <= -90) {
                    stopAnimation();
                }
            }, 100);
        }

        return () => {
            clearInterval(animationInterval);
        };
    }, [isAnimating, translateY]);

    return(
        <div className="crashGame">
            <div className="crashGame__game">
                <div className={`crashGame__gameActivity ${isAnimating ? 'active' : ''}`}>
                    <div className="crashGame__gameActivityCounter">{isAnimating ? `${counter.toFixed(2)}x` : `${countdown}s`}</div>
                    <div className="crashGame__gameActivityDescr">В раунде</div>
                    <div className="crashGame__gameActivityWay">
                        <div className={`crashGame__gameActivityRunner ${isAnimating ? 'backgroundActive' : 'backgroundInactive'}`}
                        style={{
                            transform: `translateY(${translateY}px)`, // Применяем значение translateY
                            transition: 'transform 0.5s ease-in-out', // Плавный переход transform
                        }}></div>
                        <img className={`crashGame__gameActivityImg ${isAnimating ? 'active' : ''}`} src={isAnimating ? gameWay : gameWayRed} alt="" 
                            style={{
                                transform: `translateY(${translateY}px)`, // Применяем значение translateY
                                transition: 'transform 0.5s ease-in-out', // Плавный переход transform
                            }}
                        />
                    </div>
                </div>
                <div className="crashGame__gameInfo">
                    <div className="crashGame__gameInfoMoney"><span>БАНК:</span> 222.00$</div>
                    <div className="crashGame__gameInfoUsers"><span>ИГРОКОВ:</span> 143</div>
                    <div className="crashGame__gameInfoSkins"><span>СКИНОВ:</span> 157</div>
                </div>
                <div className="crashGame__gameLastX">
                    <div className="crashGame__gameLastXItem">1.32x</div>
                    <div className="crashGame__gameLastXItem">11.56x</div>
                    <div className="crashGame__gameLastXItem">5.72x</div>
                    <div className="crashGame__gameLastXItem">2.04x</div>
                    <div className="crashGame__gameLastXItem">1.27x</div>
                    <div className="crashGame__gameLastXItem">4.30x</div>
                    <div className="crashGame__gameLastXItem">1.00x</div>
                    <div className="crashGame__gameLastXItem">4.10x</div>
                </div>
            </div>
            <div className="crashGame__bid">
                <div className="crashGame__bidHeader">
                    <img src={weapons} alt="" className="crashGame__bidImg" />
                </div>
                <div className="crashGame__bidContent">
                    <div className="crashGame__bidTitle">АВТО-ВЫВОД</div>
                    <div className="crashGame__bidInfo">
                        <div className="crashGame__bidInfoCount">2</div>
                        <img src={settings} alt="" className="crashGame__bidInfoIcon" />
                    </div>
                    <div className="crashGame__bidX">
                        <div className="crashGame__bidXItem">1.1X</div>
                        <div className="crashGame__bidXItem">1.2X</div>
                        <div className="crashGame__bidXItem">1.5X</div>
                        <div className="crashGame__bidXItem">2X</div>
                    </div>
                    <div className="crashGame__bidDescr">ВЫБЕРИТЕ СКИН ИЗ ИНВЕНТАРЯ ДЛЯ СТАВКИ</div>
                </div>
                <button className="crashGame__bidButton">СДЕЛАТЬ СТАВКУ</button>
            </div>
            <div className="crashGame__inventory">
                <div className="crashGame__inventoryWrapper">
                    <div className="crashGame__inventoryActivity">
                        <div className="crashGame__inventoryTitle">ИНВЕНТАРЬ</div>
                        <div className="crashGame__inventoryActivityTotal">
                            <div className="crashGame__inventoryActivityTotalBalance">0.00$</div>
                            <div className="crashGame__inventoryActivityTotalDescr">БАЛАНС</div>
                        </div>
                        <div className="crashGame__inventoryActivitySelected">
                            <div className="crashGame__inventoryActivityTotalBalance">0.00$</div>
                            <div className="crashGame__inventoryActivityTotalDescr">ВЫБРАНО СКИНОВ</div>
                        </div>
                        <button className="crashGame__inventoryActivityMarket">МАРКЕТ</button>
                        <button className="crashGame__inventoryActivityTake">ВЫВЕСТИ</button>
                    </div>

                    <div className="crashGame__inventoryItems">
                        <div className="crashGame__inventoryItem">
                            <div className="crashGame__inventoryItemMain">
                                <div className="crashGame__inventoryItemAdd">
                                    <div className="crashGame__inventoryItemAddIcon"></div>
                                </div>
                                <div className="crashGame__inventoryItemDescr">КУПИТЬ СКИН</div>
                            </div>
                            <div className="crashGame__inventoryItemButton">
                                <div className="crashGame__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                <div className="crashGame__inventoryItemCost">0.25$</div>
                            </div>
                        </div>
                    </div>
                    <div className="crashGame__inventoryItems">
                        <div className="crashGame__inventoryItem">
                            <div className="crashGame__inventoryItemMain">
                                <div className="crashGame__inventoryItemAdd">
                                    <div className="crashGame__inventoryItemAddIcon"></div>
                                </div>
                                <div className="crashGame__inventoryItemDescr">КУПИТЬ СКИН</div>
                            </div>
                            <div className="crashGame__inventoryItemButton">
                                <div className="crashGame__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                <div className="crashGame__inventoryItemCost">1.00$</div>
                            </div>
                        </div>
                    </div>
                    <div className="crashGame__inventoryItems">
                        <div className="crashGame__inventoryItem">
                            <div className="crashGame__inventoryItemMain">
                                <div className="crashGame__inventoryItemAdd">
                                    <div className="crashGame__inventoryItemAddIcon"></div>
                                </div>
                                <div className="crashGame__inventoryItemDescr">КУПИТЬ СКИН</div>
                            </div>
                            <div className="crashGame__inventoryItemButton">
                                <div className="crashGame__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                <div className="crashGame__inventoryItemCost">5.00$</div>
                            </div>
                        </div>
                    </div>
                    <div className="crashGame__inventoryItems">
                        <div className="crashGame__inventoryItem">
                            <div className="crashGame__inventoryItemMain">
                                <div className="crashGame__inventoryItemAdd">
                                    <div className="crashGame__inventoryItemAddIcon"></div>
                                </div>
                                <div className="crashGame__inventoryItemDescr">КУПИТЬ СКИН</div>
                            </div>
                            <div className="crashGame__inventoryItemButton">
                                <div className="crashGame__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                <div className="crashGame__inventoryItemCost">10.00$</div>
                            </div>
                        </div>
                    </div>
                    <div className="crashGame__inventoryItems">
                        <div className="crashGame__inventoryItem">
                            <div className="crashGame__inventoryItemMain">
                                <div className="crashGame__inventoryItemAdd">
                                    <div className="crashGame__inventoryItemAddIcon"></div>
                                </div>
                                <div className="crashGame__inventoryItemDescr">КУПИТЬ СКИН</div>
                            </div>
                            <div className="crashGame__inventoryItemButton">
                                <div className="crashGame__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                <div className="crashGame__inventoryItemCost">0.25$</div>
                            </div>
                        </div>
                    </div>
                    <div className="crashGame__inventoryItems">
                        <div className="crashGame__inventoryItem">
                            <div className="crashGame__inventoryItemMain">
                                <div className="crashGame__inventoryItemAdd">
                                    <div className="crashGame__inventoryItemAddIcon"></div>
                                </div>
                                <div className="crashGame__inventoryItemDescr">КУПИТЬ СКИН</div>
                            </div>
                            <div className="crashGame__inventoryItemButton">
                                <div className="crashGame__inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                <div className="crashGame__inventoryItemCost">0.25$</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <InventoryMobile />
        </div>
    )
} 

export default GameCrash;