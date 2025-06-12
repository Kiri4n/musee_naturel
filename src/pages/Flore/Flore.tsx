import './Flore.css'
import Navigation from "../../components/Navigation/Navigation.tsx";
import LanguageSelection from "../../components/LanguageSelection/LanguageSelection.tsx";
import ImgFougere from "../../assets/img/Fougere.png"
import {useTranslation} from "react-i18next";
import IdleRedirect from "../../components/IdleRedirect/IdleRedirect.tsx";

function Flore() {
    const { t } = useTranslation();
    return (
        <>
            <IdleRedirect />
            <main>
                <div className="page-navigation-container">

                </div>
                <div className="main-container">
                    <div className="main-container__text">
                        <h1>{t("fren")}</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Donec viverra senectus suspendisse cursus purus eu sagittis nunc. Etiam praesent tristique cum pulvinar libero lectus integer ultricies vitae. Eget ac ut mi et est sodales nibh ut.
                        </p>
                    </div>
                    <img src={ImgFougere} className="flore__main-container__image"/>
                </div>
            </main>
            <footer>
                <Navigation display={"flex"}/>
                <LanguageSelection />
            </footer>
        </>
    )
}

export default Flore;