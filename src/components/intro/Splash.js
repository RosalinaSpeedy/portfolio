import React from 'react';
import intro from './intro.css';

import { useState } from 'react';
import { useEffect } from 'react';

import FadeInElement from './common/FadeInElement';

const comments = ["/*".split(""),
"*/".split(""),
"Can someone please write unit tests for this portfolio page?".split(""),
"You're having a laugh mate.".split("")]

//const comment2 = "";
//console.log(comment2.length)

const Splash = () => {
  const [comment1Typed, setComment1Typed] = useState(" ");
  const [comment2Typed, setComment2Typed] = useState(" ");
  const [comment3Typed, setComment3Typed] = useState(" ");
  const [comment4Typed, setComment4Typed] = useState(" ");
  const [currentComment, setCurrentComment] = useState(0);

  const [comment1Container, setComment1Container] = useState("commentContainer highlightedComment");
  const [comment2Container, setComment2Container] = useState("commentContainer");
  const [comment3Container, setComment3Container] = useState("commentContainer");
  const [comment4Container, setComment4Container] = useState("commentContainer");

  const [comment1Number, setComment1Number] = useState("highlightedNumber");
  const [comment2Number, setComment2Number] = useState("commentNumber");
  const [comment3Number, setComment3Number] = useState("commentNumber");
  const [comment4Number, setComment4Number] = useState("commentNumber");

  const [comment2Line, setComment2Line] = useState();
  const [comment3Line, setComment3Line] = useState();

  useEffect(() => {
    setTimeout(() => {
      //console.log(currentComment)
      switch (currentComment) {
        case 0:
          setComment1Container("commentContainer highlightedComment");
          setComment1Number("highlightedNumber");
          comment1Typed === undefined || comment1Typed.length - 1 >= comments[currentComment].length ? setCurrentComment(currentComment + 1) :
            setComment1Typed(comment1Typed + "" + comments[currentComment][comment1Typed.length - 1]);
          break;
        case 1:
          setComment1Container("commentContainer");
          setComment4Container("commentContainer highlightedComment");
          setComment1Number("commentNumber");
          setComment4Number("highlightedNumber");
          comment4Typed === undefined || comment4Typed.length - 1 >= comments[currentComment].length ? setCurrentComment(currentComment + 1) :
            setComment4Typed(comment4Typed + "" + comments[currentComment][comment4Typed.length - 1]);
          break;
        case 2:
          setComment2Container("commentContainer highlightedComment");
          setComment4Container("commentContainer");
          setComment2Number("highlightedNumber");
          setComment4Number("commentNumber");
          comment2Typed === undefined || comment2Typed.length - 1 >= comments[currentComment].length ? setCurrentComment(currentComment + 1) :
            setComment2Typed(comment2Typed + "" + comments[currentComment][comment2Typed.length - 1]);
          break;
        case 3:
          setComment2Container("commentContainer");
          setComment3Container("commentContainer highlightedComment");
          setComment2Number("commentNumber");
          setComment3Number("highlightedNumber");
          comment3Typed === undefined || comment3Typed.length - 1 >= comments[currentComment].length ? setCurrentComment(currentComment + 1) :
            setComment3Typed(comment3Typed + "" + comments[currentComment][comment3Typed.length - 1]);
          break;
        default:
          setComment3Container("commentContainer");
          setComment4Container("commentContainer highlightedComment");
          setComment3Number("commentNumber");
          setComment4Number("highlightedNumber");
          return;
      }
    }, 30)
  }, [comment2Typed, comment1Typed, comment3Typed, comment4Typed, currentComment])

  return (
    <div class="splashContainer">
      <div class="splashImage">
        <div class="splashText">
          BEN CRADDOCK
        </div>
        <FadeInElement>
          <div class="splashTagline">
            FULL STACK, APP AND AI DEVELOPER
          </div>
        </FadeInElement>
      </div>

      <FadeInElement>
        <div class="splashExtraTextContainer">
          <div class={comment1Container}><div class={comment1Number}>25</div><div class="extraComment">{comment1Typed}</div></div>
          <div class={comment2Container}><div class={comment2Number + " verticalCommentLine"}>26</div><div class="longComment">{comment2Typed}</div></div>
          <div class={comment3Container}><div class={comment3Number + " verticalCommentLine"}>27</div><div class="longComment">{comment3Typed}</div></div>
          <div class={comment4Container}><div class={comment4Number}>28</div><div class="extraComment">{comment4Typed}</div></div>
        </div>
      </FadeInElement>
      <FadeInElement>
        <div class="arrowDownContainer">
          <svg viewBox="0 0 47 80" class="arrows">
            <path class="a1" d="M0 0 L23 32 L46 0"></path>
            <path class="a2" d="M0 20 L23 52 L46 20"></path>
            <path class="a3" d="M0 40 L23 72 L46 40"></path>
          </svg>
        </div>
      </FadeInElement>
    </div>
  )
}

export default Splash