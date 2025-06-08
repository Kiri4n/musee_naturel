import './Navigation.css'

import Boar from '../../assets/icons/svg-boars.svg'
import Leaf from '../../assets/icons/svg-leaf.svg'
import Map from '../../assets/icons/svg-map.svg'

interface Props {
    display: 'flex' | 'none';
}

function Navigation(props: Props) {
    return (
        <>
            <div className="navigation" style={{ display: props.display }}>
                <button className={"navigation__button"}><img src={Boar}/></button>
                <button className={"navigation__button"}><img src={Leaf}/></button>
                <button className={"navigation__button"}><img src={Map}/></button>
            </div>
        </>
    )
}

export default Navigation;