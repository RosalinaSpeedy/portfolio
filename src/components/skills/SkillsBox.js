import React, { useState } from 'react';
import skills from './skills.css';

import FadeInElement from '../common/FadeInElement';

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
        default:
            return;
    }
}

const SkillsBox = ({ title, body }) => {
    return (
        <FadeInElement><div class="skillsInfoContainer">
            <div class="skillsInfoTitle">{title}</div>
            {/* <div class="skillsBody">{body}</div> */}
            {renderSkill(title, body)}
        </div></FadeInElement>
    )
}

export default SkillsBox