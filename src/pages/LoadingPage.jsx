
import { useEffect } from 'react';
import WaterLogo from '../assets/images/water-logo.svg';
import { Link, useNavigate } from 'react-router-dom';


export const LoadingPage = () => { 
    
    const navigate = useNavigate();

    useEffect(() => {
        console.log("hola")
        setTimeout(() => {
          navigate('/principal');
        }, 2000);
    }, []);

    return (
        <div className='flex items-center justify-center h-screen bg-[#F0F0F0]'>
            <img src={WaterLogo} alt='Water logo' className='w-16 h-16'/>
        </div>
    );
}