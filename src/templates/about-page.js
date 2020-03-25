import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Breadcrumbs from '../components/Breadcrumbs';
import Donate from '../components/Donate';

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
