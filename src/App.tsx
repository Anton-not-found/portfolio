import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {BrowserRouter} from "react-router-dom";
import {Works} from "./works/Works";
import {RemoteWork} from "./remoteWork/RemoteWork";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main/>
                <Skills/>
                <Works />
                <RemoteWork />
                <Contacts />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
