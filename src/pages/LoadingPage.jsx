
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {colors} from "../assets/colors.js";

import WaterLogo from '../assets/images/water-logo.svg';


export const LoadingPage = () => { 
    
    const navigate = useNavigate();

    useEffect(() => {
        console.log(colors)
        setTimeout(() => {
          navigate('/home');
        }, 2000);
    }, );

    return (
        <div className={`flex items-center justify-center h-screen bg-[${colors.antiflashWhite}]`}>
            <img src={WaterLogo} alt='Water logo' className='w-16 h-16'/>
        </div>
    );
}