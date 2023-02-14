import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// CONTEXT
import { NavBarProvider } from './context/NavBarContext';

// COMPONENTS
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import SpiewnikLyricsContainer from './components/Spiewnik/SpiewnikLyricsContainer';


const App = () => {
    return (
        <NavBarProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route index element={ <Header/>} />
                    <Route path=":id" element={ <SpiewnikLyricsContainer/> } />
                </Routes>
            </BrowserRouter>
        </NavBarProvider>
    );
}

export default App;
