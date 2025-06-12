// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import ge from "./locales/ge.json";
import sp from "./locales/sp.json";
import pt from "./locales/pt.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            fr: { translation: fr },
            ge: { translation: ge },
            sp: { translation: sp },
            pt: { translation: pt }
        },
        lng: "en", // langue par défaut
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // React s'occupe déjà de la sécurité
        },
    });

export default i18n;