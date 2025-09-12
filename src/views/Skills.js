import React from 'react';
import ReactDOM from 'react-dom/client';
import main from "./main.css";

import SkillsTitle from '../components/skills/SkillsTitle';
import Terminal from '../components/skills/Terminal';

const Skills = () => {
    return (
        <div>
            <SkillsTitle/>
            <Terminal/>
        </div>
    )
}

export default Skills;
