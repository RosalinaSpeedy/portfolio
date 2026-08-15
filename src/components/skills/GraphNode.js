import React, { useEffect, useState } from 'react';
import skills from './skills.css';

import FadeInElement from '../common/FadeInElement';

const GraphNode = ({ id, r, cx, cy, lines, classNode, text, setHovered }) => {
    const [displayText, setDisplayText] = useState(id);
    const [delayHandler, setDelayHandler] = useState(null);
    const [largeModifier, setLargeModifier] = useState(0);
    
    

    const handleMouseEnter = () => {
        setHovered("fade-in-section");
        setDelayHandler(setTimeout(() => {
            setDisplayText(text)
            setLargeModifier(51);
        }, 250));
    }
    const handleMouseLeave = () => {
        clearTimeout(delayHandler);
        setDisplayText(id);
        setLargeModifier(0);
    }

    const renderLines = () => {
        const linesMapped = lines.map(line => <line
            class="graphLine" x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} key={"" + line.x1 + line.y1 + line.x2 + line.y2}
        />)
        return linesMapped
    }
    const renderTextLines = (lineSplit) => {
        let textLines = []
        for (let i = 0; i < lineSplit.length; i++) {
            textLines.push(<tspan x={cx} y={cy - r + i * 20}>{lineSplit[i]}</tspan>)
        }
        return textLines;
    }
    const buildGraphic = (text) => {
        let lineSplit = displayText.split("\n");
        console.log(text);
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
                    {
                        text.length > 1 ?
                        <text x={cx} y={cy} text-anchor="middle" stroke="#000000" stroke-width="1px" dy=".3em">
                            {renderTextLines(lineSplit)}
                        </text> 
                        : <text x={cx} y={cy} text-anchor="middle" stroke="#000000" stroke-width="1px" dy=".3em">{displayText}</text>
                    }
                    
                        
                </g>
            </svg >
        )
    }
    return (
        //<circle r={r} cx={cx} cy={cy} class="circle" />
        buildGraphic(displayText)
    )
}

export default GraphNode