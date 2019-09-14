import React, { useState } from 'react';
import { bool, arrayOf, string, func } from 'prop-types';
import { Link } from 'gatsby';
import menu from '../img/menu.png';

const Links = ({ links, mobile }) =>
  links.map((link, idx) => (
    <Link 
      to={`/${link}`}
      className={
        mobile 
          ? '' 
          : `uppercase sm:inline sm:text-black ${(idx + 1 === links.length) ? '' : 'sm:mr-4'}`
      }
      activeStyle={{ 
        color: '#b3564b'
      }}
      key={link}
    >
      {link}
    </Link>  
  ));

Links.propTypes = {
  links: arrayOf(string).isRequired,
  mobile: bool
};

// * fix element flashing on load issue
const MobileMenu = ({ links, visible }) => (
  <div 
    className={`mobile-nav overflow-hidden h-auto text-center text-xs uppercase ${visible ? 'border-b' : ''} sm:hidden`} 
    style={{ maxHeight: visible ? '175px' : '0px' }}
  >
    <Links links={links} mobile />
  </div>
);

MobileMenu.propTypes = {
  links: arrayOf(string).isRequired,
  visible: bool.isRequired
};


const HamburgerMenu = ({ handleSetVisible }) => (
  <div 
    onClick={() => handleSetVisible(visible => !visible)} 
    className="relative h-6 sm:hidden"
  >
    <img src={menu} alt="hamburger menu" width="20" height="20" />
  </div>
);

HamburgerMenu.propTypes = {
  handleSetVisible: func.isRequired
};


const NavLinks = ({ links }) => (
  <div className="hidden sm:block">
    <Links links={links} />
  </div>
);

NavLinks.propTypes = {
  links: arrayOf(string).isRequired
};


const Header = () => {
  const [visible, setVisible] = useState(false);
  const links = ['articles', 'about', 'contact'];

  return (
    <header className="border-b">
      <MobileMenu links={links} visible={visible} />  
      <div className="navbar flex items-center justify-between h-16 px-6">
        <h1 className="header text-md m-0">
          <Link to="/" title="Logo" className="flex items-center">
            <img src="/img/logo-80.png" alt="amber.health pomegranate logo" className="mr-2 sm:w-10" width="32" />
            <span className="l-1">a</span>
            <span className="l-2">m</span>
            <span className="l-3">b</span>
            <span className="l-4">e</span>
            <span className="l-5">r</span>
            <img 
              src="/img/logo-80.png" 
              alt="amber.health pomegranate logo" 
              className="mx-1 l-6" 
              style={{ width: '5px' }} 
            />
            <span className="l-7">h</span>
            <span className="l-8">e</span>
            <span className="l-9">a</span>
            <span className="l-10">l</span>
            <span className="l-11">t</span>
            <span className="l-12">h</span>
          </Link>
        </h1>
        <nav className="text-xs">
          <HamburgerMenu handleSetVisible={setVisible} />
          <NavLinks links={links} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
