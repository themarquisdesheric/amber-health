import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import _kebabCase from 'lodash/kebabCase';
import _uniq from 'lodash/uniq';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Breadcrumbs from '../components/Breadcrumbs';
import Donate from '../components/Donate';

const MedicalDisclaimer = () => (
  <Fragment>
    <hr className="mt-8" />
    <p className="disclaimer text-sm italic mt-12 mb-0">
      This website offers health and wellness information that is provided for informational purposes only. This information is not intended as a substitute for the advice provided by your physician or other healthcare professionals. You should not rely on this information as a substitute for, nor does it replace, professional medical advice, diagnosis, or treatment. Always speak with your physician or other healthcare professionals before taking any medication, or nutritional/herbal supplement, or using any treatment. Contact your healthcare provider promptly if you have or suspect that you have a health concern. Do not disregard professional medical advice or delay in seeking professional advice because of something you have read on this website. The use of any information provided on this website is solely at your own risk.
    </p>
  </Fragment>
);

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
  // fix firefox float bug
  const isFirefox = typeof InstallTrigger !== 'undefined';

  return (
    <section className="content">
      <Breadcrumbs path="Articles" />
      <div className="article flex flex-col items-center text-center">
        <div className="max-w-xl">
          {helmet || ''}
          <h1 className="font-bold pt-2 pb-3">
            {title}
          </h1>
          <p className="pb-8 mb-12">
            <span className="subtitle inline-block">
              {description}
            </span>
          </p>

          <div className="sharethis-inline-share-buttons mb-8" />
          
          {series && (
            <p className="series italic">
              This is part {seriesNumber} of the &nbsp;
              <a href={seriesLink} className="underline" style={{ color: '#b3564b' }} target="_blank" rel="noopener noreferrer">{series} Series</a>
            </p>
          )}
          <PostContent content={content} className={`article-content flex flex-col items-center ${isFirefox ? 'firefox' : ''}`} />

          {tags && tags.length ? (
            <ul className="tags mt-16">
              {tags.map(tag => (
                <Link to={`/tags/${_kebabCase(tag)}/`} key={tag + 'tag'}>
                  <li className="tag">{tag}</li>
                </Link>
              ))}
            </ul>
          ) : null}

          <Donate />
          <MedicalDisclaimer />
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
  const { 
    tags,
    keywords,
    description,
    series,
    seriesNumber,
    seriesLink, 
    title,
    shareCardImage
  } = post.frontmatter;

  const url = `/articles/${_kebabCase(title)}`;
  // can't use featuredImage because it gets interpreted as a file (not a string) so need redundant field :(
  const imageUrl = `${shareCardImage}.jpg`;
  const seoKeywords = _uniq(tags.concat(keywords)).join(', ');

  return (
    <Layout>
      <ArticleTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={description}
        series={series}
        seriesNumber={seriesNumber}
        seriesLink={seriesLink}
        helmet={
          <Helmet titleTemplate="%s | The Chronic">
            <title>{title}</title>
            <meta
              name="description"
              content={`${description}`}
            />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={imageUrl} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@info_chronic" />
            <meta name="twitter:creator" content="@info_chronic" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image:src" content={imageUrl} />
            <meta name="twitter:image:alt" content="woman holding pomegranate" />
            {seoKeywords.length > 0 && 
              <meta
                name="keywords"
                content={seoKeywords}
              />
            }
          </Helmet>
        }
        tags={tags}
        title={title}
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
        keywords
        shareCardImage
      }
    }
  }
`;
