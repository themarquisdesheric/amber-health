import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Breadcrumbs from '../components/Breadcrumbs';

export const ArticleTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="content">
      <Breadcrumbs path="Articles" />
      <div className="article flex flex-col items-center">
        <div className="max-w-xl">
          {helmet || ''}
          <h1 className="text-2xl font-semibold py-2 md:text-3xl">
            {title}
          </h1>
          <p className="italic pb-4 border-b" style={{ marginBottom: '2rem' }}>{description}</p>
          <PostContent content={content} className="article-content" />
          {tags && tags.length ? (
            <ul className="tags mt-16">
              {tags.map(tag => (
                <Link to={`/tags/${kebabCase(tag)}/`} key={tag + 'tag'}>
                  <li className="tag">
                    {tag}
                  </li>
                </Link>
              ))}
            </ul>
          ) : null}
        </div>

      </div>
    </section>
  );
};

ArticleTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const Article = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ArticleTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Amber.health">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

Article.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Article;

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
