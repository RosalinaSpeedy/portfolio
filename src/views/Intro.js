import React from 'react';
import ReactDOM from 'react-dom/client';
import main from "./main.css";

import LogoButton from '../components/intro/LogoButton';
import Navbar from '../components/intro/Navbar';
import Splash from '../components/intro/Splash';

const Intro = () => {
    return (
        <div id="introContainer">
            <div>
                <LogoButton/>
                <div class="inlineHeader">
                    
                    <Navbar/>
                </div>
            </div>
            <Splash/>
        </div>
    )
}

export default Intro;
