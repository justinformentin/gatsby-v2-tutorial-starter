/* eslint max-len: 0 */

import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Container from '../layouts/Container';
import Layout from '../layouts'
import Header from '../components/Header';

const ErrorPage = (center) => (
  <Layout>
    <Helmet title={`404`} />
    <Header title="404" />
    <Container center={center}>
        <h1>Woops, something went wrong.</h1>
        <h3>This page doesn't exist or is no longer reachable.</h3>
        <p>
          This never happens, I swear. You're just so pretty, and I'm so nervous. Please don't tell my friends.
        </p>
        <h3>
          You can return to the <Link to="/">Homepage</Link> if you'd like.
        </h3>
    </Container>
  </Layout>
);

export default ErrorPage;