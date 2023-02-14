import React, { Fragment, useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

// IMAGE
import Logo from '../../images/logo.svg';

// CONTEXT
import { NavBarContext } from '../../context/NavBarContext';

// FIREBASE
import { getPiosenki, getPiosenkiById } from "../../firebase/firebaseConfig";

const navigation = {
    social : [
        { name: 'Instagram', icon: <FontAwesomeIcon icon={faInstagram} />, href: 'instagram.com/harcerstwoargentyna/' },
        { name: 'Facebook', icon: <FontAwesomeIcon icon={faFacebookSquare} />, href: 'facebook.com/harcerstwo.argentyna/' },
    ]
}

const NavBar = (NavBarProps) => {

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

    return (
        <>
            {/* Burger */}
            <header className="w-full absolute left-0 right-0 bg-transparent z-40">
                <nav aria-label="Top" className="p-4 sm:p-6 lg:p-8">
                    <div className="h-16 flex items-center">
                        <button type="button" className="bg-transparent p-2 rounded-md text-white" onClick={() => setOpen(true)}>
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-8 w-8 xs:h-8 xs:w-8 sm:h-8 sm:w-8 md:h-10 md:w-10" aria-hidden="true" />
                        </button>
                    </div>
                </nav>
            </header>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40" onClose={setOpen}>
                    <Transition.Child as={Fragment} enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100" leaveTo="opacity-0" >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <Transition.Child as={Fragment} enter="transition ease-in-out duration-300 transform" enterFrom="-translate-x-full" enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="-translate-x-full">
                        <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 pt-5 pb-2 flex">
                                <button type="button" className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400" onClick={() => setOpen(false)}>
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            {/* Logo */}
                            <Link to='/' onClick={() => setOpen(false)} className='w-60 my-5 px-4 inline-flex items-center align-middle'> 
                                <img src={Logo} alt="Logo" className='w-10'/>
                                <p className='text-gray-900 text-base visible duration-300 ml-4 pt-1 origin-left'>
                                    ZHP Argentyna
                                </p>
                            </Link>

                            {/* Piosenki */}
                            <div className="mt-2 border-t border-gray-200 pb-8 px-4">
                                {/* Search */}
                                <div className='flex items-center rounded-full bg-gray-100 mt-12 p-3 duration-300'>
                                    <FontAwesomeIcon icon={faSearch} className={`text-gray-900 text-lg block cursor-pointer float-left`}/>
                                    <input id="searchInput" type={"text"} placeholder="Szukaj" className='ml-3 text-base bg-transparent w-full text-gray-900 focus:outline-none'
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
                                                <Link key={val.title} to={`/${val.id}`} onClick={() => setOpen(false)} className='mx-2 my-5 p-2 block text-gray-500'> 
                                                    {val.title}
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            {/* Social */}
                            <div className="border-t border-gray-200 py-6 flex flex-row text-3xl text-gray-900">
                                {navigation.social.map((page) => (
                                    <div key={page.name} className="flow-root px-4">
                                        <a key={page.name} href={"https://" + page.href} target="_blank" rel="noopener noreferrer">
                                            {page.icon}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

    </>
    )
}

export default NavBar;