import React, { useEffect, useState } from 'react';
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
        mobileApps: "Specialising in React Native for cross-platform development between Android and IOS. Experienced in creating adaptable, custom components that can be implemented across a wide range of functional, complex applications.",
        AIAndML: "Highly invested in the adpotion of AI into our world and lives and greatly motivated to keep up-to-date on the skills for it. Speciliating in scikit.learn, TensorFlow and PyTorch - adept in applying these frameworks to both generative and data science situations."
    }
    const [skillsInfoTitle, setSkillsInfoTitle] = useState(skillsId.fullStack);
    const [skillsBody, setSkillsBody] = useState(bodies.fullStack);

    useEffect(() => {
        switch(skillsInfoTitle){
            case "Full Stack":
                setSkillsBody(bodies.fullStack);
                break;
            case "Mobile Apps":
                setSkillsBody(bodies.mobileApps);
                break;
            case "AI and ML":
                setSkillsBody(bodies.AIAndML);
                break;
            default:
                return;
        }
    }, [skillsInfoTitle])
    return (
        <div class="skillsContainer">
            <SkillsTitle />
            <div class="skillsWrapper">
                <div class="skillsInfoColumn">
                    <div class="skillsDisplayContainer">
                        <Terminal 
                            setSkillsInfoTitle={setSkillsInfoTitle}
                        />
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
