import React, { useEffect, useState } from 'react';
import skills from './skills.css';

import FadeInElement from '../common/FadeInElement';

const GraphNode = ({ id, r, cx, cy, lines, classNode }) => {
    const [displayText, setDisplayText] = useState(id);
    const [delayHandler, setDelayHandler] = useState(null);

    const handleMouseEnter = () => {
        setDelayHandler(setTimeout(() => {
            setDisplayText("AAAAA")
        }, 250))
    }
    const handleMouseLeave = () => {
        clearTimeout(delayHandler);
        setDisplayText(id);
    }

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
                <g
                    class="bubble"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <circle
                        r={r}
                        cx={cx}
                        cy={cy}
                        class={"circle " + classNode}
                    >
                    </circle>
                    <text x={cx} y={cy} text-anchor="middle" stroke="#0d0d0dff" stroke-width="0.08vw" dy=".3em">{displayText}</text>
                </g>
            </svg >
        )
    }
    return (
        //<circle r={r} cx={cx} cy={cy} class="circle" />
        buildGraphic()
    )
}

export default GraphNode