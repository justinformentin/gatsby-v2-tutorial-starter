import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layouts';
import Header from '../components/Header';
import Container from '../layouts/Container';
import TagsBlock from '../components/TagsBlock';

const Tags = ({ pageContext }) => {
  const { tags } = pageContext;

  return (
    <Layout>
      <Header title="Tags Page">Gatsby Tutorial Starter</Header>
      <Container>
        <TagsBlock list={tags} />
      </Container>
    </Layout>
  );
};

export default Tags;

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.string,
  }),
};
