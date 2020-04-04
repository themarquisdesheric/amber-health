import React from 'react';
import _kebabCase from 'lodash/kebabCase';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/Breadcrumbs';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <section className="content">
      <Breadcrumbs path="Tags" />
      <div className="flex flex-col items-center">
        <div className="max-w-xl">
          <Helmet title={`Tags | ${title}`} />
          <div>
            <div className="mb-24">
              <ul>
                {group.map(tag => (
                  <li key={tag.fieldValue} className="tag">
                    <Link to={`/tags/${_kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
