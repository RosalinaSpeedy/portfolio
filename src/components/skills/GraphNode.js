import React from 'react';
import skills from './skills.css';

import FadeInElement from '../common/FadeInElement';

const GraphNode = ({ id, r, cx, cy }) => {
    return (
        <svg class="circleContainer">
            <circle r={r} cx={cx} cy={cy} fill="#569CD6" stroke="#CCCCCC" stroke-width="3" />
        </svg>
    )
}

export default GraphNode