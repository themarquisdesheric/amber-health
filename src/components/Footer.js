import React from 'react';

import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';

const Footer = () => (
  <footer className="footer pt-12">
    <small className="flex justify-center text-center py-4">
      <span>
        © {new Date().getFullYear()} Amber Robinson
      </span>
      <span className="social">
        <a title="instagram" href="https://instagram.com" className="px-3">
          <img
            src={instagram}
            alt="Instagram"
          />
        </a>
        <a title="twitter" href="https://twitter.com">
          <img
            src={twitter}
            alt="Twitter"
          />
        </a>
      </span>
    </small>
  </footer>
);

export default Footer;
