import { useState } from 'react';

import './GameRollrun.scss'

import InventoryMobile from '../../../components/inventoryMobile/InventoryMobile';

import weapon from '../../../assets/img/rollrunImg/weapon.png'
import prizeBox from '../../../assets/img/rollrunImg/gift.png'
import box from '../../../assets/img/rollrunImg/box.png'
import weaponSecond from '../../../assets/img/rollrunImg/pistol.png'

function GameRollrun(){
     // Состояние для отслеживания активного элемента
    const [activeIndex, setActiveIndex] = useState(0);

    // Список дочерних элементов
    const elements = [2,3,4,5];

    // Обработчик клика для каждого дочернего элемента
    const handleClick = (index) => {
        setActiveIndex(index);
    };

    // Функция для рендеринга дочерних элементов
    const renderElements = () => {
        return elements.map((element, index) => {
            // Определение класса
            const className = index === activeIndex ? 'rollrun__gameActivityCreateUserCount Active' : 'rollrun__gameActivityCreateUserCount';

            return (
                <div
                    key={index}
                    className={className}
                    onClick={() => handleClick(index)} // Устанавливаем обработчик клика на каждый дочерний элемент
                >
                    {element}
                </div>
            );
        });
    };

    return(
        <div className="rollrun__game">
            <div className="rollrun__gameActivity">
                <div className="rollrun__gameActivityChoice">
                    <img src={weapon} alt="" />
                    <button className="rollrun__gameActivityChoiceButton">ВЫБЕРИТЕ СКИН</button>
                </div>
                <div className="rollrun__gameActivityCreate">
                
                    <div className="rollrun__gameActivityCreateUser">
                        <div className="rollrun__gameActivityCreateUserDescr">КОЛИЧЕСТВО ИГРОКОВ</div>
                    </div>
                    {renderElements()}
                    {/* <div className="rollrun__gameActivityCreateUserCount Active">2</div>
                    <div className="rollrun__gameActivityCreateUserCount">3</div>
                    <div className="rollrun__gameActivityCreateUserCount">4</div>
                    <div className="rollrun__gameActivityCreateUserCount">5</div> */}
                    <button className="rollrun__gameActivityCreateButton">СОЗДАТЬ ИГРУ <span>0.00</span> </button>
                </div>
            </div>
            <div className="rollrun__gameQuest">
                <img src={prizeBox} alt="" className="rollrun__gameQuestImg" />
                <div className="rollrun__gameQuestContent">
                    <div className="rollrun__gameQuestContentLeft">
                    <div className="rollrun__gameQuestContentLeftTitle">Задание дня</div>
                    <div className="rollrun__gameQuestContentLeftDescr">Обнуляется ежедневно в 05:00</div>
                    <div className="rollrun__gameQuestContentLeftCounter">
                        <div className="rollrun__gameQuestContentLeftCounterNum">0/3</div>
                        <div className="rollrun__gameQuestContentLeftCounterInfo">3 победы подряд со ставкой не менее 5</div>
                    </div>
                    </div>
                    <div className="rollrun__gameQuestContentRight">
                        <div className="rollrun__gameQuestContentRightPrize">
                            <div className="rollrun__gameQuestContentRightPrizeIcon"><img src={box} alt="" /></div>
                            <div className="rollrun__gameQuestContentRightPrizeDescr">
                                <div className="rollrun__gameQuestContentRightPrizeDescrTop">Приз за выполнение</div>
                                <div className="rollrun__gameQuestContentRightPrizeDescrBottom">5.00</div>
                            </div>
                        </div>
                        <img src={weaponSecond} alt="" className="rollrun__gameQuestContentRightImg" />
                    </div>
                </div>
                <i class="bi bi-chevron-down rollrun__gameQuestIcon"></i>
            </div>
            <InventoryMobile />
        </div>
    )
}

export default GameRollrun