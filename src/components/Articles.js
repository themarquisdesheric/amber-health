import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const topics = ['Ehlers-Danlos Syndrome', 'Interstitial Cystitis', 'Endometriosis', 'Lichen Sclerosus'];

const Articles = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <section className="section">
      <p className="mb-16">Home → Articles</p>
      <div className="flex flex-col items-center">
        {posts &&
          posts.map(({ node: post }) => (
            <article className="max-w-xl mb-8" key={post.id}>
              <Link to={post.fields.slug}>
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="w-full">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.title}`
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="text-lg font-semibold py-2">
                    {post.frontmatter.title}
                  </p>
                </header>
                <p className="text-sm">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        <div>
          <p className="text-md font-semibold py-2">Topics</p>
          {topics.map(topic => 
            <Link to={`/tags/${kebabCase(topic)}/`} className="text-sm block" key={topic}>
              {topic}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

Articles.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query ArticlesQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "article" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Articles data={data} count={count} />}
  />
);