import React from 'react';
import { Helmet } from 'react-helmet';
import _uniq from 'lodash/uniq';
import Footer from '../components/Footer';
import Header from './Header';
import useSiteMetadata from './SiteMetadata';
import keywords from '../SEOkeywords';

import '../styles/styles.scss';

const TemplateWrapper = ({ children, className = '' }) => {
  const { title, description } = useSiteMetadata();
  const seoKeywords = _uniq(keywords).join(', ');

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://www.thechronic.info/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://www.thechronic.info/img/favicon-32.png"
          sizes="32x32"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://www.thechronic.info" />
        <meta
          property="og:image"
          content="https://www.thechronic.info/img/og-image.jpg"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@info_chronic" />
        <meta name="twitter:url" content="https://www.thechronic.info" />
        <meta name="twitter:title" content="The Chronic" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.thechronic.info/img/og-image.jpg?refresh" />
        <meta name="twitter:image:src" content="https://www.thechronic.info/img/og-image.jpg" />
        <meta name="twitter:image:alt" content="pomegranate logo" />
        {seoKeywords.length > 0 && 
          <meta
            name="keywords"
            content={seoKeywords}
          />
        }
        <script type="text/javascript" src="https://platform-api.sharethis.com/js/sharethis.js#property=5e6573e0d0c39800126ea9ef&product=inline-share-buttons&cms=website" async="async"></script>
      </Helmet>
      <Header />
      <main className={`main-content mt-16 ${className}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
