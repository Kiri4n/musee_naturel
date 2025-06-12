import './App.css'

import NavCard from "./components/NavCard/NavCard.tsx"
import SvgBoar from './assets/icons/svg-boars.svg'
import ImgMousse from './assets/img/mousse.png'
import SvgLeaf from './assets/icons/svg-leaf.svg'
import ImgSpruce from './assets/img/AdobeStock_1409870842.png'
import SvgMap from './assets/icons/svg-map.svg'
import ImgWooman from './assets/img/AdobeStock_1164303902.png'

import LanguageSelection from "./components/LanguageSelection/LanguageSelection.tsx"

import Navigation from "./components/Navigation/Navigation.tsx";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";



function App() {
    const { t } = useTranslation();
  return (
    <>
        <h1>{t("home-title")}</h1>
        <main>
            <Link to="/faune" className="nav-link">
                <NavCard title={t("wildlife")} bgIcon={SvgBoar} mainImg={ImgMousse} mainImgPosition={{ maxWidth: '358px', left: '-79px', bottom: '0'}} />
            </Link>
            <Link to="/flore" className="nav-link">
                <NavCard title={t("flora")} bgIcon={SvgLeaf} mainImg={ImgSpruce} mainImgPosition={{ maxWidth: '271px', right: '0', bottom: '35px'}} />
            </Link>
            <Link to="/carte" className="nav-link">
                <NavCard title={t("map")} bgIcon={SvgMap} mainImg={ImgWooman} mainImgPosition={{ maxWidth: '476px', left: '-148px', bottom: '0'}} />
            </Link>
        </main>
        <footer>
            <Navigation display={"none"}/>
            <LanguageSelection />
        </footer>
    </>
  )
}
export default App
