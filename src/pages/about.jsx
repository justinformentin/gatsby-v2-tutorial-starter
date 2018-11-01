import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import Layout from '../layouts';
import Header from '../components/Header';
import Container from '../layouts/Container';

const Text = styled.div`
    margin: 2rem 10rem;
  }
`;

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">Gatsby Tutorial Starter</Header>
    <Container center={center}>
      <Text>
        <h3>
          If you would like to build this site completely from scratch, you go
          can go read the guide{' '}
          <a href="https://justinformentin.com/gatsby-v2-guide">here.</a>
        </h3>
        <br />
        <h3>
          Or you can watch the video{' '}
          <a href="https://youtube.com/#">on Youtube.</a>
        </h3>
      </Text>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
