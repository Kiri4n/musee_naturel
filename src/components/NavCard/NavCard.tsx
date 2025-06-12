import './NavCard.css'

interface NavCardProps {
    title: string;
    bgIcon: string; // Chemin du fichier SVG (utilisé dans <use href="..." />)
    mainImg: string; // Chemin de l'image principale (PNG, JPG, etc.)
    mainImgPosition: React.CSSProperties; // Chaîne de style CSS inline (ex: 'left: -58px; bottom: 0;')
}


function NavCard(props: NavCardProps) {
    return (
        <>
            <div className="nav-card">
                <div className="nav-card__title-container">
                    <span className="title-container__fade-title">{props.title}</span>
                    <h2 className="title-container__title">{props.title}</h2>
                </div>
                <img className={"nav-card__bg-icon"} src={props.bgIcon}/>
                <img className="nav-card__img" src={props.mainImg} alt="image of a mousse" loading="lazy" style={props.mainImgPosition}/>
            </div>
        </>
    )
}

export default NavCard