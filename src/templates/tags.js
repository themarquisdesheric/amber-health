import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';
import Article from '../components/Article';

const TagRoute = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { tag } = pageContext;
  const { title } = data.site.siteMetadata;
  const { totalCount } = data.allMarkdownRemark;

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with “${tag}”`;

  return (
    <Layout>
      <section className="content">
        <Breadcrumbs path="Tags" />
        <div className="flex flex-col items-center">
          <div className="max-w-xl">
            <Helmet title={`${tag} | ${title}`} />
            <div className="mb-24">
              <h3>{tagHeader}</h3>
              <ul className="py-4 flex flex-wrap">
                {posts.map(({ node: post }) => (
                  <Article post={post} className="tag-tile max-w-sm" key={post.id} />
                ))}
              </ul>
              <p className="browse-all-tags">
                <Link to="/tags/">Browse all tags</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 576, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
