import React, { useState } from 'react';
import skills from './skills.css';

import FadeInElement from '../common/FadeInElement';
import { Typewriter } from 'react-simple-typewriter'

const Terminal = ({setSkillsInfoTitle}) => {
    const [terminalText, setTerminalText] = useState("PF C:\\Ben\\Portfolio>");
    return (
        <FadeInElement>
            <div class="terminalColumn">
                <div class="terminalOptionsBar">
                    <a onClick={() => setSkillsInfoTitle("Full Stack")}><div class="terminalOption fullStackOption">Full Stack</div></a>
                    <a onClick={() => setSkillsInfoTitle("Mobile Apps")}><div class="terminalOption mobileAppsOption">Mobile Apps</div></a>
                    <a onClick={() => setSkillsInfoTitle("AI and ML")}><div class="terminalOption AIAndMLOption">AI and ML</div></a>
                </div>
                <div class="terminalContainer">
                    <div class="terminalHeader">
                        <a class="terminalHeaderLink"><div class="problems">PROBLEMS</div></a>
                        <a class="terminalHeaderLink"><div class="output">OUTPUT</div></a>
                        <a class="terminalHeaderLink"><div class="debugConsole">DEBUG CONSOLE</div></a>
                        <a class="terminalHeaderLink"><div class="terminal">TERMINAL</div></a>
                        <a class="terminalHeaderLink"><div class="ports">PORTS</div></a>
                    </div>
                    <div class="terminalText">{terminalText} 
                    <div class="terminalTypewriter"><Typewriter
                        words={[""]}
                        cursor
                        cursorStyle="█"
                        typeSpeed={80}
                        delaySpeed={200}
                    />
                    </div></div>
                </div>
            </div>
        </FadeInElement>
    )
}

export default Terminal