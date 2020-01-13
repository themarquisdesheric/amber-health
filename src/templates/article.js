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
  title,
  series,
  seriesNumber,
  seriesLink,
  tags,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="content">
      <Breadcrumbs path="Articles" />
      <div className="article flex flex-col items-center text-center">
        <div className="max-w-xl">
          {helmet || ''}
          <h1 className="font-bold pt-2 pb-3">
            {title}
          </h1>
          <p className="pb-8 mb-12">{description}</p>
          {series && (
            <p className="italic mb-4">
              This is part {seriesNumber} of the
              <Link to={seriesLink} className="underline" style={{ color: '#b3564b' }}> {series} Series</Link>
            </p>
          )}
          <PostContent content={content} className="article-content flex flex-col items-center" />
          {tags && tags.length ? (
            <ul className="tags mt-16">
              {tags.map(tag => (
                <Link to={`/tags/${kebabCase(tag)}/`} key={tag + 'tag'}>
                  <li className="tag">{tag}</li>
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
  series: PropTypes.string,
  seriesNumber: PropTypes.string,
  seriesLink: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
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
        series={post.frontmatter.series}
        seriesNumber={post.frontmatter.seriesNumber}
        seriesLink={post.frontmatter.seriesLink}
        helmet={
          <Helmet titleTemplate="%s | The Chronic">
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
        series
        seriesNumber
        seriesLink
        tags
      }
    }
  }
`;
