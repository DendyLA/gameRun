import { useState } from 'react'

import './Market.scss'

import dotaPers from '../../../assets/img/market/dotaPers.png'
import csPers from '../../../assets/img/market/csPers.png'
import rustPers from '../../../assets/img/market/rustPers.png'

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
            <div className="market__sale"></div>
            <div className="market__skins"></div>
        </div>
    )
}

export default Market;