import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// CONTEXT
import { NavBarContext } from '../../context/NavBarContext';

// FIREBASE
import { getPiosenki, getPiosenkiById } from "../../firebase/firebaseConfig";


const NavBarSearchList = () => {
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
            <div className="mt-2 border-t border-neutral-200 pb-8 px-4">
                {/* Search */}
                <div className='flex items-center rounded-full bg-neutral-100 mt-12 p-3 duration-300 text-neutral-900'>
                    <FontAwesomeIcon icon={faSearch} className={`text-lg block cursor-pointer float-left`}/>
                    <input id="searchInput" type={"text"} placeholder="Szukaj" className='ml-3 text-base bg-transparent w-full focus:outline-none'
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
                                <Link key={val.title} to={`/${val.id}`} onClick={() => setOpen(false)} className='mx-2 my-5 p-2 block text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700'> 
                                    {val.title}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default NavBarSearchList;