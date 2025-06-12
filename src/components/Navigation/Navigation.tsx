import './Navigation.css'


import Boar from '../../assets/icons/svg-boars.svg'
import Leaf from '../../assets/icons/svg-leaf.svg'
import Map from '../../assets/icons/svg-map.svg'
import {Link} from "react-router-dom";

interface Props {
    display: 'flex' | 'none';
}

function Navigation(props: Props) {
    return (
        <>
            <div className="navigation" style={{ display: props.display }}>
                <Link to="/faune">
                    <img className={"navigation__button"} src={Boar}/>
                </Link>
                <Link to="/flore">
                    <img className={"navigation__button"} src={Leaf}/>
                </Link><Link to="/carte">
                <img className={"navigation__button"} src={Map}/>
            </Link>
            </div>
        </>
    )
}

export default Navigation;