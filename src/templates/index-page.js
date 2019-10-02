import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export const IndexPageTemplate = ({
  image
}) => (
  <div>
    <div
      className="full-width-image"
      style={{
        backgroundImage: `url(${
          image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}
    />
    <main className="flex flex-col items-center">
      <div className="index-wrapper text-justify mb-12">
        <section className="max-w-xl m-auto px-6">
          <p>
            The Chronic is a comprehensive guide
            of curated resources for those with chronic illness
            who are navigating a broken healthcare system
            while trying to preserve their dignity and self worth
            and ultimately attain wellness and health.
          </p>
        </section>
        <section className="w-screen bg-gray-900 text-white p-6">
          <p className="max-w-xl">
            Valuable resources like time, access, and energy are often limited when experiencing illness. This thoughtful collection of trusted resources addresses a variety of diseases and conditions and aims to empower, challenge, and revolutionize the patient perspective.
          </p>
        </section>
        <section className="w-screen p-6 text-white" style={{ background: '#b3564b' }}>
          <p className="max-w-xl">
            When seeking medical care it is imperative to receive validation in the form of an accurate diagnosis which leads to an appropriate treatment approach and better quality of care. Being informed to the best of your ability will help you advocate for yourself and your health needs, especially if your doctor is not prepared to do so.
          </p>
        </section>
      </div>
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
