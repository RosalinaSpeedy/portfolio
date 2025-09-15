import React from 'react';
import skills from './skills.css';

import FadeInElement from '../common/FadeInElement';
import GraphNode from './GraphNode';

const GraphNet = () => {
    return (
        <FadeInElement><div class="graphContainer">
            <GraphNode
                r={30}
                cx={80}
                cy={43}
            />
            <GraphNode
                r={30}
                cx={100}
                cy={290}
            />
            <GraphNode
                r={30}
                cx={200}
                cy={180}
            />
            <GraphNode
                r={30}
                cx={40}
                cy={180}
            />
            <GraphNode
                r={30}
                cx={450}
                cy={300}
            />
            <GraphNode
                r={30}
                cx={400}
                cy={90}
            />
        </div></FadeInElement>
    )
}

export default GraphNet