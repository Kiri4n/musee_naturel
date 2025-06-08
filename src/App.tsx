import './App.css'

import NavCard from "./components/NavCard/NavCard.tsx"
import SvgBoar from './assets/icons/boar.svg'
import ImgMousse from './assets/img/mousse.png'
import SvgLeaf from './assets/icons/leaf.svg'
import ImgSpruce from './assets/img/AdobeStock_1409870842.png'
import SvgMap from './assets/icons/map.svg'
import ImgWooman from './assets/img/AdobeStock_1164303902.png'

import LanguageSelection from "./components/LanguageSelection/LanguageSelection.tsx"

import Navigation from "./components/Navigation/Navigation.tsx";


function App() {
  return (
    <>
        <h1>Faites une petite pause</h1>
        <main>
            <NavCard title="Faune" bgIcon={SvgBoar} idBgIcon="svg-boar" mainImg={ImgMousse} mainImgPosition={{ maxWidth: '358px', left: '-79px', bottom: '0'}} />
            <NavCard title="Flore" bgIcon={SvgLeaf} idBgIcon="svg-leaf" mainImg={ImgSpruce} mainImgPosition={{ maxWidth: '271px', right: '0', bottom: '35px'}} />
            <NavCard title="Carte" bgIcon={SvgMap} idBgIcon="svg-map" mainImg={ImgWooman} mainImgPosition={{ maxWidth: '476px', left: '-148px', bottom: '0'}} />
        </main>
        <footer>
            <Navigation display={"none"}/>
            <LanguageSelection />
        </footer>
    </>
  )
}
export default App
