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
          ? 'opacity-9' 
          : `sm:inline sm:text-gray-800 ${(idx + 1 === links.length) ? '' : 'sm:mr-4'}`
      }
      activeStyle={{ 
        color: mobile ? '#fff' : '#b3564b',
        opacity: '1',
        fontWeight: '600'
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

const MobileMenu = ({ links, visible }) => (
  <div 
    className={`mobile-nav overflow-hidden h-auto averia-font text-center text-sm ${visible ? 'border-b' : ''} sm:hidden`} 
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
    className="hamburger-menu relative flex justify-end items-center h-6 sm:hidden"
  >
    <img src={menu} alt="hamburger menu" width="20" height="20" />
  </div>
);

HamburgerMenu.propTypes = {
  handleSetVisible: func.isRequired
};


const NavLinks = ({ links }) => (
  <div className="averia-font hidden tracking-widest sm:block">
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
    <header className="site-header">
      <MobileMenu links={links} visible={visible} />  
      <div className="navbar flex items-center justify-between h-16 px-6 md:px-24">
        <h1 className="header text-md m-0 relative">
          <Link to="/" title="Logo" className="flex items-center text-lg">
            <img  src="/img/logo-80.png" alt="amberhealth pomegranate logo" className="mr-2 sm:w-10" width="32" />
            the chronic
          </Link>
        </h1>
        <nav className="text-sm">
          <HamburgerMenu handleSetVisible={setVisible} />
          <NavLinks links={links} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
