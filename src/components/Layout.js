import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import Footer from '../components/Footer';
import Header from './Header';
import useSiteMetadata from './SiteMetadata';

import '../styles/styles.scss';

const TemplateWrapper = ({ children, className = '' }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32.png`}
          sizes="32x32"
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.png`}
        />
      </Helmet>
      <Header />
      <main className={`main-content mt-16 ${className}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
