import React from 'react';
import {Helmet} from 'react-helmet';
import Events from '../components/Events';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="The home page" />
      </Helmet>
      <Events  />
    </Layout>
  )
}
