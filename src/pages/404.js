import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <div className="four-oh-four flex justify-center items-center text-center px-12">
      <div className="pink-modal-wrapper">
        <div className="pink-modal-text p-4">
          <h1>404</h1>
          <p className="text-white mt-4">This page has not been found... let's <Link to="/" className="underline text-black">go home</Link> instead?</p>
        </div>
      </div>
    </div>
    <div className="h-12" />
  </Layout>
);

export default NotFoundPage;
