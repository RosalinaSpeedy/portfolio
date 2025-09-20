import React, { useEffect, useState } from 'react';
import skills from './skills.css';

import FadeInElement from '../common/FadeInElement';

const GraphNode = ({ id, r, cx, cy, lines, classNode }) => {

    const [text, setText] = useState(id);

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
                    onMouseOver={() => {
                        setText("AAAAAAAAAAAAAA")
                    }}
                    onMouseOut={() => setText(id)}>
                    <circle
                        r={r}
                        cx={cx}
                        cy={cy}
                        class={"circle " + classNode}
                    >
                    </circle>
                    <text x={cx} y={cy} text-anchor="middle" stroke="#0d0d0dff" stroke-width="2px" dy=".3em">{text}</text>
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