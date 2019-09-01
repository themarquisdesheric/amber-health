import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const topics = ['Ehlers-Danlos Syndrome', 'Interstitial Cystitis', 'Endometriosis', 'Lichen Sclerosus'];

const BlogRoll = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <section className="section">
      <h1 className="text-2xl font-semibold mb-6">Articles</h1>
      <div className="flex flex-wrap">
        {posts &&
          posts.map(({ node: post }) => (
            <article className="max-w-md mb-8 xs:mr-8" key={post.id}>
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
      </div>

      <div>
        <p className="w-full text-md font-semibold py-2">Topics</p>
        {topics.map(topic => 
          <Link to={`/tags/${kebabCase(topic)}/`} className="text-sm block" key={topic}>
            {topic}
          </Link>
        )}
      </div>
    </section>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
