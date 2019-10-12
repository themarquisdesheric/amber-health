import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export const IndexPageTemplate = ({
  image,
  heroText,
  secondBlockText,
  thirdBlockText,
  firstSnippet,
  secondSnippet,
  thirdSnippet,
  fourthSnippet
}) => (
  <div>
    <main className="index-wrapper text-justify mb-12 leading-loose md:text-lg lg:text-xl">
      <section 
        className="full-width-image m-auto px-6"
        style={{
          backgroundImage: `url(${
            image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          height: 'calc(100vh - 65px)'
        }}
      >
        <p className="index-intro-text max-w-xl text-md">
          {heroText}
        </p>
      </section>
      <section className="p-6" style={{ background: 'rgb(65, 25, 19)' }}>
        <p className="max-w-xl" style={{ color: '#fff' }}>
          {secondBlockText}
        </p>
      </section>
      
      <div className="snippets">
        <div>
          <img src="/img/apple-touch-icon.png" alt="pomegranate logo" />
          <p>{firstSnippet}</p>
        </div>
        <div>
          <img src="/img/apple-touch-icon.png" alt="pomegranate logo" />
          <p>{secondSnippet}</p>
        </div>
        <div>
          <img src="/img/apple-touch-icon.png" alt="pomegranate logo" />
          <p>{thirdSnippet}</p>
        </div>
        <div>
          <img src="/img/apple-touch-icon.png" alt="pomegranate logo" />
          <p>{fourthSnippet}</p>
        </div>
      </div>
      
      <section className="p-6" style={{ background: 'rgba(179, 86, 75, 0.5)' }}>
        <p className="max-w-xl" style={{ color: '#fff' }}>
          {thirdBlockText}
        </p>
      </section>
    </main>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroText: PropTypes.string.isRequired,
  secondBlockText: PropTypes.string.isRequired,
  thirdBlockText: PropTypes.string.isRequired,
  firstSnippet: PropTypes.string.isRequired,
  secondSnippet: PropTypes.string.isRequired,
  thirdSnippet: PropTypes.string.isRequired,
  fourthSnippet: PropTypes.string.isRequired
};

const IndexPage = ({ data: { markdownRemark: { frontmatter }} }) => {
  return (
    <Layout>
      <IndexPageTemplate {...frontmatter} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heroText
        secondBlockText
        thirdBlockText
        firstSnippet
        secondSnippet
        thirdSnippet
        fourthSnippet
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
