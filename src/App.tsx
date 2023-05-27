import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {BrowserRouter} from "react-router-dom";
import {RemoteWork} from "./remoteWork/RemoteWork";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {Projects} from "./projects/Projects";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main/>
                <Skills/>
                <Projects />
                <RemoteWork />
                <Contacts />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
