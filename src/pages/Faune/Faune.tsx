import './Faune.css'
import Navigation from "../../components/Navigation/Navigation.tsx";
import LanguageSelection from "../../components/LanguageSelection/LanguageSelection.tsx";
import ImgFougere from "../../assets/img/mousse-x.png"
import {useTranslation} from "react-i18next";
import IdleRedirect from "../../components/IdleRedirect/IdleRedirect.tsx";

function Faune() {
    const { t } = useTranslation();
    return (
        <>
            <IdleRedirect />
            <main>
                <div className="page-navigation-container">

                </div>
                <div className="main-container">
                    <div className="main-container__text">
                        <h1>{t("moose")}</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Donec viverra senectus suspendisse cursus purus eu sagittis nunc. Etiam praesent tristique cum pulvinar libero lectus integer ultricies vitae. Eget ac ut mi et est sodales nibh ut.
                        </p>
                    </div>
                    <img src={ImgFougere} className="faune__main-container__image"/>
                </div>
            </main>
            <footer>
                <Navigation display={"flex"}/>
                <LanguageSelection />
            </footer>
        </>
    )
}

export default Faune;