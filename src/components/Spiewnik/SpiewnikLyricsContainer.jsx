import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

// FIREBASE
import { getPiosenkiById } from "../../firebase/firebaseConfig";
import SpiewnikLyrics from './SpiewnikLyrics';

const SpiewnikLyricsContainer = () => {
    const [piosenka, setPiosenka] = useState ({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getFromFirebase = async () => {
            try {
                const piosenka = await getPiosenkiById(id);
                if (piosenka) {
                    setPiosenka(piosenka);
                } else {
                    navigate("/");
                }
            } catch (error) {
            navigate("/");
            console.error("getPiosenkiById", error);
            }
        };
        getFromFirebase();
    }, [id, navigate]);


    return (
        <div className='bg-white dark:bg-dmbneutro-600 text-dmbneutro-600 dark:text-white w-full h-[100%] min-h-screen flex p-10'>
            <SpiewnikLyrics piosenka={piosenka}/>
        </div>
    )
}


export default SpiewnikLyricsContainer;