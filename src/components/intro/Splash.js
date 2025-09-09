import React from 'react';
import intro from './intro.css';

const Splash = () => {
  return (
    <div class="splashContainer">
      <div class="splashImage">
        <div class="splashText">
          BEN CRADDOCK
        </div>
        <div class="splashTagline">
          FULL STACK, APP AND AI DEVELOPER
        </div>
      </div>
      <div class="splashExtraTextContainer">
        <div class="commentContainer"><div class="commentNumber">25</div><div class="extraComment">/*</div></div>
        <div class="commentContainer"><div class="commentNumber verticalCommentLine">26</div><div class="longComment">Can someone please write unit tests for this portfolio page?</div></div>
        <div class="commentContainer"><div class="commentNumber verticalCommentLine">27</div><div class="longComment">You're having a laugh mate.</div></div>
        <div class="commentContainer highlightedComment"><div class="highlightedNumber">28</div><div class="extraComment">*/</div></div>
      </div>
      <div class="arrowDownContainer">
        <svg class="arrows">
          <path class="a1" d="M0 0 L22.5 32 L50 0"></path>
          <path class="a2" d="M0 20 L22.5 52 L50 20"></path>
          <path class="a3" d="M0 40 L22.5 72 L50 40"></path>
        </svg>
      </div>
    </div>
  )
}

export default Splash