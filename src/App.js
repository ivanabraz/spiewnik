import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// CONTEXT
import { NavBarProvider } from './context/NavBarContext';

// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import HeroText from './components/HeroText/HeroText';
import SpiewnikLyricsContainer from './components/Spiewnik/SpiewnikLyricsContainer';


const App = () => {
    return (
        <NavBarProvider>
            <BrowserRouter>
                <Routes>
                    <Route index element={ <HeroText title="Śpiewnik" backgroundColor="bg-pink-2"/>} />
                    <Route path=":id" element={ <SpiewnikLyricsContainer/> } />
                </Routes>
                <NavBar/>
            </BrowserRouter>
        </NavBarProvider>
    );
}

export default App;
