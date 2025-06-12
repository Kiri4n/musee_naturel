import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AUTO_LOGOUT_TIME = 10 * 1000; // 10s d'inactivité

const IdleRedirect: React.FC = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const timerId = useRef<NodeJS.Timeout | null>(null);

    // Fonction pour redémarrer le timer
    const resetTimer = () => {
        if (timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
            navigate("/"); // redirection vers la page d'accueil
        }, AUTO_LOGOUT_TIME);
    };

    useEffect(() => {
        // Reset timer à chaque interaction utilisateur
        const events = ["mousemove", "keydown", "scroll", "touchstart"];

        events.forEach((event) =>
            window.addEventListener(event, resetTimer)
        );

        // Démarrer le timer au montage
        resetTimer();

        // Nettoyage au démontage
        return () => {
            if (timerId.current) clearTimeout(timerId.current);
            events.forEach((event) =>
                window.removeEventListener(event, resetTimer)
            );
        };
    }, [navigate, resetTimer]);

    return null;
};

export default IdleRedirect;