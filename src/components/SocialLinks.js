import React from 'react';

import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';

const MakeSocialLink = ({ title, href, src }) => (
  <a title={title} href={href} target="_blank" rel="noopener noreferrer">
    <img
      src={src}
      alt={title}
      className="relative inline w-4 h-4"
    />
  </a>
);

const SocialLinks = () => (
  <span className="social absolute block w-full text-center">
    <MakeSocialLink title="The Chronic Instagram" href="https://www.instagram.com/thechronicinfo/" src={instagram} />
    <MakeSocialLink title="The Chronic Twitter" href="https://twitter.com/info_chronic" src={twitter} />
  </span>
);

export default SocialLinks;
