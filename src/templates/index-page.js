import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export const IndexPageTemplate = ({
  image,
  heroText,
  firstSnippetHeader,
  firstSnippetText,
  secondSnippetHeader,
  secondSnippetText,
  thirdSnippetHeader,
  thirdSnippetText,
  postSnippetsText
}) => {
  const snippets = [{
    image: '/img/SliceWhite2.png',
    header: firstSnippetHeader,
    text: firstSnippetText
  },
  {
    image: '/img/PomSketchWhite1.png',
    header: secondSnippetHeader,
    text: secondSnippetText
  },
  {
    image: '/img/PomSketchWhite2.png',
    header: thirdSnippetHeader,
    text: thirdSnippetText
  }];

  return (
    <div>
      <div className="index-wrapper text-justify mb-12 leading-loose md:text-lg lg:text-xl">
        <section 
          className="full-width-image m-auto p-12"
          style={{
            backgroundImage: `url(${
              image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            height: 'calc(100vh - 65px)'
          }}
        >
          <div className="pink-modal-wrapper max-w-xl py-4">
            <p className="pink-modal-text text-md">
              {heroText}
            </p>
          </div>
        </section>
        
        <section className="snippets" style={{ background: 'rgb(65, 25, 19)' }}>
          {snippets.map(({ image, header, text }) => (
            <div key={header}>
              <img src={image} alt="pomegranate" />
              <p className="text-xl text-bold">{header}</p>
              <p>{text}</p>
            </div>
          ))}
        </section>
        
        <section className="p-6" style={{ background: 'rgba(179, 86, 75, 0.5)' }}>
          <p className="max-w-xl" style={{ color: '#fff' }}>
            {postSnippetsText}
          </p>
        </section>
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroText: PropTypes.string.isRequired,
  firstSnippetHeader: PropTypes.string.isRequired,
  firstSnippetText: PropTypes.string.isRequired,
  secondSnippetHeader: PropTypes.string.isRequired,
  secondSnippetText: PropTypes.string.isRequired,
  thirdSnippetHeader: PropTypes.string.isRequired,
  thirdSnippetText: PropTypes.string.isRequired,
  postSnippetsText: PropTypes.string.isRequired
};

const IndexPage = ({ data: { markdownRemark: { frontmatter }} }) => (
  <Layout>
    <IndexPageTemplate {...frontmatter} />
  </Layout>
);

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
        firstSnippetHeader
        firstSnippetText
        secondSnippetHeader
        secondSnippetText
        thirdSnippetHeader
        thirdSnippetText
        postSnippetsText
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
