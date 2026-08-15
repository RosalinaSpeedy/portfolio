import React from 'react';
import common from './common.css';

import { useState } from 'react';
import { useEffect } from 'react';

import FadeInElement from '../common/FadeInElement';

const ArrowButton = ({href}) => {

  return (
    <FadeInElement >
        <a href={href}><div class="arrowDownContainer">
          <svg viewBox="0 0 47 80" class="arrows">
            <path class="a1" d="M0 0 L23 32 L46 0"></path>
            <path class="a2" d="M0 20 L23 52 L46 20"></path>
            <path class="a3" d="M0 40 L23 72 L46 40"></path>
          </svg>
        </div></a>
      </FadeInElement>
  )
}

export default ArrowButton