import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Breadcrumbs from '../components/Breadcrumbs';

const Donate = () => (
  <div id="donate" className="text-center text-sm rounded-lg my-12 p-4">
    <p className="mt-4">
      If you found this website useful, please consider donating.
    </p>
    <form className="m-auto" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_donations" />
      <input type="hidden" name="business" value="UV9GEXJFJ7AKJ" />
      <input type="hidden" name="currency_code" value="USD" />
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
      <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
    <p className="mt-2">
      Donations will be used to maintain the website and support the author as she works towards a healthier future.
    </p>
  </div>
);

export const AboutPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Fragment>
      <div
        className="full-width-image"
        style={{
          backgroundImage: 'url("/img/pom-2.jpg")'
        }}
      />
      <div className="content">
        <Breadcrumbs path="About" />
        <div className="article flex flex-col items-center">
          <div className="max-w-xl">
            <PageContent content={content} className="article-content" />
            <Donate />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AboutPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
