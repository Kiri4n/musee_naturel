import './App.css'
import './components/NavCard/NavCard.tsx'
import NavCard from "./components/NavCard/NavCard.tsx"
import SvgBoar from './assets/icons/boar.svg';
import ImgMousse from './assets/img/mousse.png';


function App() {
  return (
    <>
        <h1>Faites une petite pause</h1>
        <main>
            <NavCard title="Faune" bgIcon={SvgBoar} idBgIcon="svg-boar" mainImg={ImgMousse} mainImgPosition={{ left: '-58px', bottom: '0'}} />
            <NavCard title="Flore" bgIcon={SvgBoar} idBgIcon="svg-boar" mainImg={ImgMousse} mainImgPosition={{ left: '-58px', bottom: '0'}} />
            <NavCard title="Carte" bgIcon={SvgBoar} idBgIcon="svg-boar" mainImg={ImgMousse} mainImgPosition={{ left: '-58px', bottom: '0'}} />
        </main>
        <footer>

        </footer>
    </>
  )
}
export default App
