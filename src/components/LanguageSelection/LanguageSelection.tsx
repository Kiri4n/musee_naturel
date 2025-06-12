import './LanguageSelection.css'

import FlagFR from '../../assets/icons/flag-france.svg'
import FlagUK from '../../assets/icons/flag-uk.svg'
import FlagGE from '../../assets/icons/flag-germany.svg'
import FlagSP from '../../assets/icons/flag-spain.svg'
import FlagPT from '../../assets/icons/flag-portugal.svg'
import i18n from "i18next";

function LanguageSelection() {
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    return (
        <>
            <div className="language-selection">
                <button className={"language-selection__button"} onClick={() => changeLanguage("fr")}><img src={FlagFR}/></button>
                <button className={"language-selection__button"} onClick={() => changeLanguage("en")}><img src={FlagUK}/></button>
                <button className={"language-selection__button"} onClick={() => changeLanguage("ge")}><img src={FlagGE}/></button>
                <button className={"language-selection__button"} onClick={() => changeLanguage("sp")}><img src={FlagSP}/></button>
                <button className={"language-selection__button"} onClick={() => changeLanguage("pt")}><img src={FlagPT}/></button>
            </div>
        </>
    )
}

export default LanguageSelection;