import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import main from "./main.css";

import SkillsTitle from '../components/skills/SkillsTitle';
import Terminal from '../components/skills/Terminal';
import SkillsBox from '../components/skills/SkillsBox';




const Skills = () => {
    const skillsId = {
        fullStack: "Full Stack",
        mobileApps: "Mobile Apps",
        AIAndML: "AI and ML"
    }
    const bodies = {
        fullStack: "Proficient in JavaScript, including frameworks like React and Express.js. Experienced in MySQL backend solutions and middleware implementation. Also experienced with responsive front-end design and implementation with HTML and CSS.",
        mobileApps: "",
        AIAndML: ""
    }
    const [skillsInfoTitle, setSkillsInfoTitle] = useState(skillsId.fullStack);
    const [skillsBody, setSkillsBody] = useState(bodies.fullStack);
    return (
        <div class="skillsContainer">
            <SkillsTitle />
            <div class="skillsWrapper">
                <div class="skillsInfoColumn">
                    <div class="skillsDisplayContainer"><Terminal />
                    </div>
                </div>
                <div class="skillsInfoColumn">
                    <div class="skillsDisplayContainer"><SkillsBox
                        title={skillsInfoTitle}
                        body={skillsBody}
                    />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills;
