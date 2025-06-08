import './LanguageSelection.css'

import FlagFR from '../../assets/icons/flag-france.svg'
import FlagUK from '../../assets/icons/flag-uk.svg'
import FlagGE from '../../assets/icons/flag-germany.svg'
import FlagSP from '../../assets/icons/flag-spain.svg'
import FlagPT from '../../assets/icons/flag-portugal.svg'

function LanguageSelection() {
    return (
        <>
            <div className="language-selection">
                <button className={"language-selection__button"}><img src={FlagFR}/></button>
                <button className={"language-selection__button"}><img src={FlagUK}/></button>
                <button className={"language-selection__button"}><img src={FlagGE}/></button>
                <button className={"language-selection__button"}><img src={FlagSP}/></button>
                <button className={"language-selection__button"}><img src={FlagPT}/></button>
            </div>
        </>
    )
}

export default LanguageSelection;