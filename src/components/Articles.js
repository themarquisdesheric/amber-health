import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import { Link, graphql, StaticQuery } from 'gatsby';
import Breadcrumbs from './Breadcrumbs';
import Article from './Article';

const topics = ['Ehlers-Danlos Syndrome', 'Interstitial Cystitis', 'Lichen Sclerosus', 'Endometriosis'];

const Articles = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <section className="content">
      <Breadcrumbs path="Articles" />
      <div className="flex flex-col items-center">
        {posts &&
          posts.map(({ node: post }) => (
            <Article post={post} className="article-card max-w-xl" key={post.id} />
          ))}
        <div>
          <p className="text-center text-md font-semibold mt-8 py-3">Topics</p>
          <ul className="topics">
            {topics.map(topic => 
              <Link to={`/tags/${kebabCase(topic)}/`} className="text-sm" key={topic}>
                {` ${topic}`}
              </Link>
            )}
          </ul>
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
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
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
    `}
    render={(data, count) => <Articles data={data} count={count} />}
  />
);
