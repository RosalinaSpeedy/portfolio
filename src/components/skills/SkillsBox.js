import React, { useEffect, useState } from 'react';
import skills from './skills.css';

import FadeInElement from '../common/FadeInElement';



const SkillsBox = ({ title, body }) => {
    const renderTitle = (title) => {
        return (
            <div class="skillsInfoTitle">{title}</div>
        )
    }

    const renderSkill = (title, body) => {
        switch (title) {
            case "Full Stack":
                return (
                    <div class="fullStackDisplay">
                        <div class="divDisplay">
                            {"<div>"}
                            <div class="skillsBody">{body}
                                <div class="HTMLCommentsSection">
                                    <div class="HTMLcomment">{"<!-- Can whoever wrote this div please add comments? -->"}</div>
                                    <div class="HTMLcomment">{"<!-- Seems you beat me to it. :P -->"}</div></div>
                            </div>
                            {"</div>"}
                        </div>

                    </div>
                );
            case "Mobile Apps":
                return (
                    <div class="mobileAppsDisplay">
                        <div class="phoneTop"></div>
                        <div class="phoneMain">
                            <div class="phoneBody">{body}
                            </div>
                            <img src={"/icons/react.svg"} class="reactLogo" alt="reactLogo" />
                        </div>
                        <div class="phoneBase"><div class="homeButton"></div></div>
                    </div>
                );
            case "AI and ML":
                return (
                    <div class="fullStackDisplay">
                        <div class="divDisplay">
                            {"<div>"}
                            <div class="skillsBody">{body}
                                <div class="HTMLCommentsSection">
                                    <div class="HTMLcomment">{"<!-- Can whoever wrote this div please add comments? -->"}</div>
                                    <div class="HTMLcomment">{"<!-- Seems you beat me to it. :P -->"}</div></div>
                            </div>
                            {"</div>"}
                        </div>

                    </div>
                );
            default:
                return;
        }
    }
    const [visibleClass, setVisibleClass] = useState('fade-in-section');
    const [skillTitle, setSkillTitle] = useState(title);
    const [skillBody, setSkillBody] = useState(body)
    //const sleep = ms => new Promise(r => setTimeout(r, ms));
    const [rerun, setRerun] = useState(false);
    useEffect(() => {
        setVisibleClass(`fade-in-section`);
        setRerun(!rerun)
    }, [title])
    useEffect(() => {
        setTimeout(() => {
            setVisibleClass(`fade-in-section is-visible`)
            setSkillBody(body);
            setSkillTitle(title);
        }, 1250);
    }, [rerun])

    return (
        <FadeInElement><div class={`${visibleClass} skillsInfoContainer`}>
            {renderTitle(skillTitle)}
            {renderSkill(skillTitle, skillBody)}
        </div></FadeInElement>
    )
}

export default SkillsBox