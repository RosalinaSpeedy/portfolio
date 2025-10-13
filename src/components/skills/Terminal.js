import React, { useState, useEffect } from 'react';
import skills from './skills.css';

import FadeInElement from '../common/FadeInElement';
import { Typewriter, useTypewriter } from 'react-simple-typewriter'

const terminalBodies = {
    fullStack: () => {
        return (
            <div class="outputCommands">
                <div>
                    {"> Local:            http://localhost:3000"}
                </div>
                <div>
                    {"> Node app listening on port 3000!"}
                </div>
            </div>
        )
    },
    mobileApps: () => {
        return (
            <div class="outputCommands">
                <div>
                    &gt; portfolioexample@<span class="versionPink">1.0.0</span> start
                </div>
                <div>
                    {"> expo start"}
                </div>
                <div>
                    {"> expo start"}
                </div>
            </div>
        )
    },
    AIAndML: () => {

    }
}

const Terminal = ({ setSkillsInfoTitle }) => {
    const [terminalText, setTerminalText] = useState("PF C:\\Ben\\Portfolio>");
    const [words, setWords] = useState(["node index.js"]);
    const [commandTyped, setCommandTyped] = useState(false);

    const [reRender, setReRender] = useState(0);

    const TypewriterOut = ({ words, onTyped }) => {
        const [text] = useTypewriter({
            words: words,
            typeSpeed: 80,
            deleteSpeed: Infinity,
            loop: 1,
            onLoopDone: (() => {
                setCommandTyped(true)
            })
        })
        if (!commandTyped) {
            //console.log("returning text")
            return <div className="terminalTypewriter">{text}</div>;
        } else {
            return <div className="terminalTypewriter">{words[0]}</div>
        }

    }

    const handleChange = (newWords, title) => {
        if (newWords[0] !== words[0]) {
            setSkillsInfoTitle(title);
            setWords(newWords);
            setCommandTyped(false);
            setReRender(prev => prev + 1);
        }
        return;
    }

    return (
        <FadeInElement>
            <div class="terminalColumn">
                <div class="terminalOptionsBar">
                    <a onClick={() => {
                        handleChange(["node index.js"], "Full Stack");
                    }}><div class="terminalOption fullStackOption">Full Stack</div></a>
                    <a onClick={() => {
                        handleChange(["npm start"], "Mobile Apps");
                    }}><div class="terminalOption mobileAppsOption">Mobile Apps</div></a>
                    <a onClick={() => {
                        handleChange(["python run main.py"], "AI and ML");
                    }}><div class="terminalOption AIAndMLOption">AI and ML</div></a>
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
                        <TypewriterOut
                            key={reRender}
                            words={words}
                        />
                        {commandTyped && terminalBodies.mobileApps()}
                    </div>
                </div>
            </div>
        </FadeInElement>
    )
}

export default Terminal