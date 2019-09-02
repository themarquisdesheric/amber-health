import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export const IndexPageTemplate = ({
  image,
  heading,
  mainpitch,
  description
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
    <main className="content flex flex-col items-center">
      <section className="max-w-md">
        <h1>{mainpitch.title}</h1>
        <h3>{mainpitch.description}</h3>
        <h3>
          {heading}
        </h3>
        <p>{description}</p>
      </section>
    </main>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
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
        heading
        mainpitch {
          title
          description
        }
        description
      }
    }
  }
`;
