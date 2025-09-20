import React from 'react';
import skills from './skills.css';

import FadeInElement from '../common/FadeInElement';
import GraphNode from './GraphNode';

const GraphNet = () => {
    return (
        <FadeInElement><div id="graphContainer">
            <svg class="circleContainer" xmlns="http://www.w3.org/2000/svg">
                <GraphNode
                    id="A"
                    r={30}
                    cx={110}
                    cy={81}
                    classNode="classNodeB"
                    lines={[
                        {
                            x1: 105,
                            y1: 83,
                            x2: 200,
                            y2: 180
                        },
                    ]}
                />
                <GraphNode
                    id="B"
                    r={30}
                    cx={175}
                    cy={290}
                    classNode="classNodeB"
                    lines={[
                        {
                            x1: 175,
                            y1: 295,
                            x2: 200,
                            y2: 180
                        },
                    ]}
                />
                
                <GraphNode
                    id="C"
                    r={30}
                    cx={90}
                    cy={200}
                    classNode="classNodeB"
                    lines={[
                        {
                            x1: 90,
                            y1: 200,
                            x2: 170,
                            y2: 180
                        },
                    ]}
                />
                <GraphNode
                    id="D"
                    r={30}
                    cx={400}
                    cy={90}
                    classNode="classNodeB"
                    lines={[
                        {
                            x1: 400,
                            y1: 90,
                            x2: 220,
                            y2: 158
                        },
                        {
                            x1: 400,
                            y1: 90,
                            x2: 400,
                            y2: 270
                        },
                    ]}
                />
                <GraphNode
                    id="E"
                    r={30}
                    cx={400}
                    cy={285}
                    classNode="classNodeB"
                    lines={[
                        {
                            x1: 400,
                            y1: 300,
                            x2: 220,
                            y2: 200
                        },
                    ]}
                />
                
                <GraphNode
                    id="F"
                    r={30}
                    cx={200}
                    cy={180}
                    classNode="classNode"
                    lines={[

                    ]}
                />
            </svg>
        </div></FadeInElement>
    )
}

export default GraphNet