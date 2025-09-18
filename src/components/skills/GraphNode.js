import React from 'react';
import skills from './skills.css';

import FadeInElement from '../common/FadeInElement';

const GraphNode = ({ id, r, cx, cy, lines }) => {

    const renderLines = () => {
        const linesMapped = lines.map(line => <line
            class="graphLine" x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} key={"" + line.x1 + line.y1 + line.x2 + line.y2}
        />)
        return linesMapped
    }
    const buildGraphic = () => {
        return (
            <svg>
                {renderLines()}
                <circle r={r} cx={cx} cy={cy} class="circle" />
            </svg>
        )
    }
    return (
        //<circle r={r} cx={cx} cy={cy} class="circle" />
        buildGraphic()
    )
}

export default GraphNode