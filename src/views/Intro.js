import React from 'react';
import ReactDOM from 'react-dom/client';

import LogoButton from '../components/intro/LogoButton';
import Navbar from '../components/intro/Navbar';

const Intro = () => {
    return (
        <div>
            <LogoButton/>
            <Navbar/>
        </div>
    )
}

export default Intro;
