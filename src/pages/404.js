import React from 'react';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <div className="four-oh-four flex flex-col justify-center items-center text-center">
      <h1>404</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
