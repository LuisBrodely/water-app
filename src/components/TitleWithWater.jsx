
import {colors} from "../assets/colors.js";

import WaterLogo from '../assets/images/water-logo.svg';
export const TitleWithWater = ({subtitle, title}) => {


    return (
        <div className={`bg-${ colors.antiflashWhite }`}>
            <img src={WaterLogo} alt='Water Logo'/>
            <h3>{ subtitle }</h3>
            <h1>{ title }</h1>

        </div>
    )
}