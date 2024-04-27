import { useState } from 'react'

import './Market.scss'

import dotaPers from '../../../assets/img/market/dotaPers.png'
import csPers from '../../../assets/img/market/csPers.png'
import rustPers from '../../../assets/img/market/rustPers.png'
import withdraw from '../../../assets/img/market/withdraw.png'
import setting from '../../../assets/img/market/setting.png'

function Market(){
    let [activeItem, setActiveItem] = useState('market__changerCs')

    const handleActive = (element) => {
        setActiveItem(element)
    }   
    return(
        <div className="market">
            <div className="market__changer">
                <div className={`market__changerDota market__changerItem ${activeItem ===  'market__changerDota' ? 'active' : ''}`} onClick={() => handleActive('market__changerDota')}>
                    <div className="market__changerDotaDescr market__changerItemDescr">DOTA2</div>
                    <img src={dotaPers} alt="" />
                </div>
                <div className={`market__changerCs market__changerItem  ${activeItem ===  'market__changerCs' ? 'active' : ''}`} onClick={() => handleActive('market__changerCs')}>
                    <div className="market__changerCsDescr market__changerItemDescr">CS2</div>
                    <img src={csPers} alt="" />
                </div>
                <div className={`market__changerRust market__changerItem ${activeItem ===  'market__changerRust' ? 'active' : ''}`} onClick={() => handleActive('market__changerRust')}>
                    <div className="market__changerRustDescr market__changerItemDescr">RUST</div>
                    <img src={rustPers} alt="" />
                </div>
            </div>
            <div className="market__sale">
                <div className="market__saleTitle">Skin Swap & Purchase Information</div>
                <div className="market__saleSkin">
                    <div className="market__saleSkinDescr">Skins selected</div>
                    <div className="market__saleSkinCount">0</div>
                </div>
                <div className="market__saleBalance">
                    <div className="market__saleBalanceCount">0.00$</div>
                    <div className="market__saleBalanceDescr">Balance after exchange</div>
                </div>
                <div className="market__saleBalance">
                    <div className="market__saleBalanceCount">0.00$</div>
                    <div className="market__saleBalanceDescr">Selected skins in the market</div>
                </div>
                <div className="market__saleButton">
                    <img src={withdraw} alt="" />
                    <div className="market__saleButtonDescr">SALE</div>
                </div>
            </div>
            <div className="market__skins">
                <div className="market__skinsHeader">
                    <input type="text" className="market__skinsHeaderSearch" placeholder='Name' />
                    <div className="market__skinsHeaderPrice">Max. price <span>$</span> </div>
                    <div className="market__skinsHeaderCount">0.25$</div>
                    <div className="market__skinsHeaderCount">1.00$</div>
                    <div className="market__skinsHeaderCount">5.00$</div>
                    <div className="market__skinsHeaderCount">10.00$</div>
                    <div className="market__skinsHeaderSetting"><img src={setting} alt="" /> </div>
                </div>
                <div className="market__skinsContent">
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                    <div className="market__skinsContentItem"></div>
                </div>
            </div>
        </div>
    )
}

export default Market;