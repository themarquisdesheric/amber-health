import React from 'react';

import SocialLinks from './SocialLinks';

const Footer = () => (
  <footer className="footer relative pt-12">
    <SocialLinks />
    <small className="flex justify-center py-4">
      <span>
        © {new Date().getFullYear()} Amber Robinson
      </span>
    </small>
  </footer>
);

export default Footer;
