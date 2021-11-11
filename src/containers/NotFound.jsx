import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Error404 from '../assets/NotFound.jpg'

export default function NotFound() {
  return (
    <Layout>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="404 error page" />
      </Helmet>
      <h1>Error 404</h1>
      <img src={Error404} alt="image 404" />
    </Layout>
  )
}
