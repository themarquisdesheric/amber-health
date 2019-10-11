import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export const IndexPageTemplate = ({
  image,
  heroText
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
        <p className="index-intro-text max-w-xl text-lg">
          {heroText}
        </p>
      </section>
      <section className="p-6" style={{ background: 'rgb(65, 25, 19)' }}>
        <p className="max-w-xl" style={{ color: '#fff' }}>
          Valuable resources like time, access, and energy are often limited when experiencing illness. This thoughtful collection of trusted resources addresses a variety of diseases and conditions and aims to empower, challenge, and revolutionize the patient perspective.
        </p>
      </section>
      
      <div className="snippets">
        <div>
          <img src="/img/apple-touch-icon.png" alt="pomegranate logo" />
          <p>curated resources for those with chronic illness</p>
        </div>
        <div>
          <img src="/img/apple-touch-icon.png" alt="pomegranate logo" />
          <p>your guide for navigating a broken healthcare system</p>
        </div>
        <div>
          <img src="/img/apple-touch-icon.png" alt="pomegranate logo" />
          <p>preserve your dignity and self worth</p>
        </div>
        <div>
          <img src="/img/apple-touch-icon.png" alt="pomegranate logo" />
          <p>attain wellness and health</p>
        </div>
      </div>
      
      <section className="p-6" style={{ background: 'rgba(179, 86, 75, 0.5)' }}>
        <p className="max-w-xl" style={{ color: '#fff' }}>
          When seeking medical care it is imperative to receive validation in the form of an accurate diagnosis which leads to an appropriate treatment approach and better quality of care. Being informed to the best of your ability will help you advocate for yourself and your health needs, especially if your doctor is not prepared to do so.
        </p>
      </section>
    </main>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
      />
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
