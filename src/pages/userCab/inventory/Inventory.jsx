

import './Inventory.scss'

import InventoryMobile from '../../../components/inventoryMobile/InventoryMobile';

function Inventory() {

    return(
        <>
            <div className="inventory">
                <div className="inventoryWrapper">
                    <div className="inventoryActivity">
                        <div className="inventoryTitle">ИНВЕНТАРЬ</div>
                        <div className="inventoryActivityTotal">
                            <div className="inventoryActivityTotalBalance">0.00$</div>
                            <div className="inventoryActivityTotalDescr">БАЛАНС</div>
                        </div>
                        <div className="inventoryActivitySelected">
                            <div className="inventoryActivityTotalBalance">0.00$</div>
                            <div className="inventoryActivityTotalDescr">ВЫБРАНО СКИНОВ</div>
                        </div>
                        <button className="inventoryActivityMarket">МАРКЕТ</button>
                        <button className="inventoryActivityTake">ВЫВЕСТИ</button>
                    </div>
                    <div className="inventoryItems">
                        <div className="inventoryItem">
                            <div className="inventoryItemMain">
                                <div className="inventoryItemAdd">
                                    <div className="inventoryItemAddIcon"></div>
                                </div>
                                <div className="inventoryItemDescr">КУПИТЬ СКИН</div>
                            </div>
                            <div className="inventoryItemButton">
                                <div className="inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                <div className="inventoryItemCost">0.25$</div>
                            </div>
                        </div>
                    </div>
                    <div className="inventoryItems">
                        <div className="inventoryItem">
                            <div className="inventoryItemMain">
                                <div className="inventoryItemAdd">
                                    <div className="inventoryItemAddIcon"></div>
                                </div>
                                <div className="inventoryItemDescr">КУПИТЬ СКИН</div>
                            </div>
                            <div className="inventoryItemButton">
                                <div className="inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                <div className="inventoryItemCost">1.00$</div>
                            </div>
                        </div>
                    </div>
                    <div className="inventoryItems">
                        <div className="inventoryItem">
                            <div className="inventoryItemMain">
                                <div className="inventoryItemAdd">
                                    <div className="inventoryItemAddIcon"></div>
                                </div>
                                <div className="inventoryItemDescr">КУПИТЬ СКИН</div>
                            </div>
                            <div className="inventoryItemButton">
                                <div className="inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                <div className="inventoryItemCost">5.00$</div>
                            </div>
                        </div>
                    </div>
                    <div className="inventoryItems">
                        <div className="inventoryItem">
                            <div className="inventoryItemMain">
                                <div className="inventoryItemAdd">
                                    <div className="inventoryItemAddIcon"></div>
                                </div>
                                <div className="inventoryItemDescr">КУПИТЬ СКИН</div>
                            </div>
                            <div className="inventoryItemButton">
                                <div className="inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                <div className="inventoryItemCost">10.00$</div>
                            </div>
                        </div>
                    </div>
                    <div className="inventoryItems">
                        <div className="inventoryItem">
                            <div className="inventoryItemMain">
                                <div className="inventoryItemAdd">
                                    <div className="inventoryItemAddIcon"></div>
                                </div>
                                <div className="inventoryItemDescr">КУПИТЬ СКИН</div>
                            </div>
                            <div className="inventoryItemButton">
                                <div className="inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                <div className="inventoryItemCost">0.25$</div>
                            </div>
                        </div>
                    </div>
                    <div className="inventoryItems">
                        <div className="inventoryItem">
                            <div className="inventoryItemMain">
                                <div className="inventoryItemAdd">
                                    <div className="inventoryItemAddIcon"></div>
                                </div>
                                <div className="inventoryItemDescr">КУПИТЬ СКИН</div>
                            </div>
                            <div className="inventoryItemButton">
                                <div className="inventoryItemTitle">БЫСТРАЯ ПОКУПКА</div>
                                <div className="inventoryItemCost">0.25$</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <InventoryMobile />
        </>
        
    )
}

export default Inventory;