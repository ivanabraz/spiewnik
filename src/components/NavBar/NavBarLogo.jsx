import React, { useContext } from "react";
import { Link } from 'react-router-dom';

// CONTEXT
import { NavBarContext } from '../../context/NavBarContext';

// IMAGE
import Logo from '../../images/logo.svg';

const NavBarLogo = () => {

    const { setOpen } = useContext(NavBarContext);

    return (
        <>
            <Link to='/' onClick={() => setOpen(false)} className='w-60 my-5 px-4 inline-flex items-center align-middle'> 
                <img src={Logo} alt="Logo" className='w-10'/>
                <p className='text-white text-base visible duration-300 ml-4 pt-1 origin-left'>
                    ZHP Argentyna
                </p>
            </Link>
        </>
    )
}

export default NavBarLogo;