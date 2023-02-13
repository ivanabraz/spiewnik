import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../images/logo.svg';

// CONTEXT
import { NavBarContext } from '../../context/NavBarContext';

// FIREBASE
import { getPiosenki, getPiosenkiById } from "../../firebase/firebaseConfig";

const NavBar = () => {

    const { open, setOpen } = useContext(NavBarContext);
    const [ searchTerm, setSearchTerm ] = useState("");
    const [piosenka, setPiosenki] = useState ([]);
    const { id } = useParams();

    useEffect(() => {
        const getFromFirebase = async () => {
            try {
                const value = (id)
                    ? await getPiosenkiById(id)
                    : await getPiosenki();
                setPiosenki(value);
            } catch (error) {
            console.error("getFromFirebase", error);
            }
        };
        getFromFirebase();
    }, [id]);

    const navigation = [
        { name: 'Instagram', icon: <FontAwesomeIcon icon={faInstagram} />, href: 'instagram.com/harcerstwoargentyna/' },
        { name: 'Facebook', icon: <FontAwesomeIcon icon={faFacebookSquare} />, href: 'facebook.com/harcerstwo.argentyna/' },
    ];


    return (
            <>
            <div className="flex overflow-auto">
                <div className={`bg-black h-screen p-5 pt-9 ${open ? "w-72" : "w-20"} duration-300 relative`}>

                    {/* Logo */}
                    <FontAwesomeIcon 
                        className={`bg-black text-white text-3xl cursor-pointer absolute -right-3 top-5 rounded-full border ${!open && "rotate-180"}`} 
                        icon={faCircleArrowLeft} onClick={() => setOpen(!open)}
                    />
                    <div className="w-60 inline-flex items-center align-middle">
                        <img src={Logo} alt="Logo" className={`w-10`}/>
                        <p className={`text-base visible duration-300 ml-4 pt-1 origin-left ${!open && "invisible, scale-0"}`}>
                            ZHP Argentyna
                        </p>
                    </div>

                    {/* Search */}
                    <div className={`flex items-center rounded-full bg-white mt-12 py-2 duration-300 
                    ${!open ? "px-2.5" : "px-4"}`}>
                        <FontAwesomeIcon icon={faSearch} className={`text-black text-lg block cursor-pointer float-left`}/>
                        <input id="searchInput" type={"text"} placeholder="Szukaj" className={`ml-3 text-base bg-transparent w-full text-black focus:outline-none ${!open && "hidden"}`}
                        onChange={(event) => {setSearchTerm(event.target.value);}}
                        />
                    </div>

                    {/* Piosenki list */}
                    <div className="w-full mt-10">
                        {piosenka.filter((val) => {
                            if(searchTerm === ""){
                                return val;
                            } else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                                }
                                return false;
                            }) 
                            .map((val) => {
                                return(
                                    <Link key={val.title} to={`/${val.id}`} className={`nav-link flex flex-col text-base mt-4 duration-300 ${!open && "hidden"}`}> 
                                        {val.title}
                                    </Link>
                                )
                            })
                    

                        }
                    </div>

                    {/* Social */}
                    <div className={`flex flex-row w-full mt-10 border-t ${!open && "flex-col text-center border-none"}`}>
                        {navigation.map((page) => (
                            <a key={page.name} href={"https://" + page.href} className={`text-white text-3xl ${!open ? "mr-0 pt-10" : "mr-5 pt-5"}`} target="_blank" rel="noopener noreferrer">
                                {page.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;