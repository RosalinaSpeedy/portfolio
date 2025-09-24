import React, { useState } from 'react';
import skills from './skills.css';

import FadeInElement from '../common/FadeInElement';


//add the arrow later
const HoverSplash = ({ hovered, setHovered }) => {
    return (
        <div class={hovered}><div class="hoverWrapper">
            <svg height={30} width={50} class="hoverGraphic">
                <text x={200} y={20} class="hoverText">// hover!</text>
            </svg>
        </div></div>
    )
}

export default HoverSplash