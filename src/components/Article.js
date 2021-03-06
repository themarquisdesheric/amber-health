import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const Article = ({ post, index, className = '' }) => (
  <article style={{ '--index': index }} className={className}>
    <Link to={post.fields.slug}>
      <header>
        {post.frontmatter.featuredImage ? (
          <div className="w-full">
            <PreviewCompatibleImage
              imageInfo={{
                image: post.frontmatter.featuredImage,
                alt: `featured image thumbnail for post ${post.frontmatter.title}`
              }}
            />
          </div>
        ) : null}
        <p className="text-lg font-bold pt-5 pb-2">
          {post.frontmatter.title}
        </p>
      </header>
      <p className="text-sm pb-2">{post.frontmatter.description}</p>
    </Link>
  </article>
);

Article.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default Article;
