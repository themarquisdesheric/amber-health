import React from 'react';
import PropTypes from 'prop-types';
import { ArticleTemplate } from '../../templates/article';

const ArticlePreview = ({ entry, widgetFor }) => (
  <ArticleTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

ArticlePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ArticlePreview;
