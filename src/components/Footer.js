import React from 'react';
import { Link } from 'gatsby';

import SocialLinks from './SocialLinks';

const Footer = () => (
  <footer className="footer relative pt-12">
    <SocialLinks />
    <small className="flex justify-center py-4">
      <span>
        © {new Date().getFullYear()} Amber Robinson | website by <Link to="https://www.whoisyuval.com" className="footer-link">yuval allweil</Link>
      </span>
    </small>
  </footer>
);

export default Footer;
