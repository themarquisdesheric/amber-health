import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const Article = ({ post, className = '' }) => (
  <article className={`${className} mb-12`}>
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
        <p className="text-lg font-semibold pt-3 pb-1">
          {post.frontmatter.title}
        </p>
      </header>
      <p className="text-sm">{post.frontmatter.description}</p> 
    </Link>
  </article>
);

Article.propTypes = {
  post: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default Article;
