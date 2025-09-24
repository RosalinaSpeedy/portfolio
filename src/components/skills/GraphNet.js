import React from 'react';
import skills from './skills.css';

import FadeInElement from '../common/FadeInElement';
import GraphNode from './GraphNode';

const GraphNet = ({setHovered}) => {

    const nodeText = {
        a: "Proficient in machine learning and neural net development.",
        b: "Completed several data science projects using TF.",
        c: "Integrated LLMs into projects by tuning on custom datasets.",
        d: "Experienced with Python dataset deconstruction and analysis.",
        e: "Competent in deploying with HuggingFace and Flask.",
        f: "Experienced with CNNs and RNNs to tackle classification tasks."
    }

    

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
                    text={nodeText.a}
                    setHovered={setHovered}
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
                    text={nodeText.b}
                    setHovered={setHovered}
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
                    text={nodeText.c}
                    setHovered={setHovered}
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
                    text={nodeText.d}
                    setHovered={setHovered}
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
                    text={nodeText.e}
                    setHovered={setHovered}
                />

                <GraphNode
                    id="F"
                    r={30}
                    cx={200}
                    cy={180}
                    classNode="classNode"
                    lines={[

                    ]}
                    text={nodeText.f}
                    setHovered={setHovered}
                />
            </svg>
        </div></FadeInElement>
    )
}

export default GraphNet