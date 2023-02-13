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
        <>
            <SpiewnikLyrics piosenka={piosenka}/>
        </>
    )
}


export default SpiewnikLyricsContainer;