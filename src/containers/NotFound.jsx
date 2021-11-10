import React from 'react';
import Layout from '../components/Layout';
import Error404 from '../assets/NotFound.jpg'

export default function NotFound() {
  return (
    <Layout>
      <h1>Error 404</h1>
      <img src={Error404} alt="image 404" />
    </Layout>
  )
}
