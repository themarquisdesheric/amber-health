import React from 'react';

import SocialLinks from './SocialLinks';

const Footer = () => (
  <footer className="footer relative pt-12">
    <SocialLinks />
    <small className="flex justify-center py-4">
      <span>
        © {new Date().getFullYear()} Amber Robinson | website by <a href="https://www.whoisyuval.com" target="_blank" rel="noopener noreferrer" className="footer-link">yuval allweil</a>
      </span>
    </small>
  </footer>
);

export default Footer;
