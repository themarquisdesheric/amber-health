import React from 'react';
import { Link } from 'gatsby';

import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="flex justify-around">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link className="navbar-item" to="/articles">
            Articles
          </Link>
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </div>

        <div className="social">
          <a title="twitter" href="https://twitter.com">
            <img
              src={twitter}
              alt="Twitter"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
          <a title="instagram" href="https://instagram.com">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
        </div>

        <small>© {new Date().getFullYear()} Amber Robinson</small>
      </footer>
    );
  }
};

export default Footer;
