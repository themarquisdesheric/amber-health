import React from 'react';
import Layout from '../../components/Layout';
import Articles from '../../components/Articles';

export default class ArticlesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image"
          style={{
            backgroundImage: 'url("/img/sonjiawpom-1.jpg")'
          }}
        />
        <Articles />
      </Layout>
    );
  }
}
