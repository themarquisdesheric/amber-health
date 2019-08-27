import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section className="section">
        <h1>Articles</h1>
        <div className="article-links">
          <Link to="/tags/ehlers-danlos-syndrome">Ehlers-Danlos Syndrome</Link>
          <Link to="/tags/interstitial-cystitis">Interstitial Cystitis</Link>
          <Link to="/tags/endometriosis">Endometriosis</Link>
          <Link to="/tags/lichen-sclerosus">Lichen Sclerosus</Link>
        </div>
        <div>
          {posts &&
            posts.map(({ node: post }) => (
              <div key={post.id}>
                <article className="article-list-item">
                  <header>
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.title}`
                          }}
                        />
                      </div>
                    ) : null}
                    <p>
                      <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </p>
                  </header>
                  <p>{post.excerpt}</p>
                </article>
              </div>
            ))}
        </div>
      </section>
    );
  }
}

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
                    fluid(maxWidth: 120, quality: 100) {
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
