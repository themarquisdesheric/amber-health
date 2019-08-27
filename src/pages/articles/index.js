import React from 'react';
import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image"
          style={{
            backgroundImage: 'url("/img/sonjiawpom-1.jpg")'
          }}
        />
        <BlogRoll />
      </Layout>
    );
  }
}
