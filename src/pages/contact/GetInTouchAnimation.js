import React from 'react';

const GetInTouchAnimation = () =>
  'Get in touch.'.split('').map((char, index) => 
    <span 
      key={`${char}-${index}`}
      style={{ animation: `flipUp 1s cubic-bezier(0.14, -0.4, 0.26, 1.55) ${(index + 1) / 10}s backwards` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  );

export default GetInTouchAnimation;
