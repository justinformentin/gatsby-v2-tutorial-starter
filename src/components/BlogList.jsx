import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { TagsBlock } from 'components';

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5rem 3rem;
`;

const Image = styled.div`
  position: relative;
  box-shadow: ${props => props.theme.shadow.feature.small.default};
  transition: ${props => props.theme.transitions.boom.transition};
  border-radius: ${props => props.theme.borderRadius.default};
  min-height: 300px;
  img {
    border-radius: ${props => props.theme.borderRadius.default};
  }
  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
    transform: translateY(-12px);
  }
  a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: ${props => props.theme.borderRadius.default};
    > div {
      position: static !important;
    }
    > div > div {
      position: static !important;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 5px ${props => props.theme.colors.primary.dark};
    }
  }
  flex-basis: calc(99.9% * 2 / 5 - 1rem);
  max-width: calc(99.9% * 2 / 5 - 1rem);
  width: calc(99.9% * 2 / 5 - 1rem);
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 500px) {
    min-height: 200px;
  }
`;

const Information = styled.div`
  h1 {
    font-size: 2rem;
    display: inline-block;
    color: ${props => props.theme.colors.black.base};
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.primary.base};
    }
  }
  flex-basis: calc(99.9% * 3 / 5 - 1rem);
  max-width: calc(99.9% * 3 / 5 - 1rem);
  width: calc(99.9% * 3 / 5 - 1rem);
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
`;

const Date = styled.div`
  color: ${props => props.theme.colors.black.lighter};
`;

const BlogList = ({ path, cover, title, date, excerpt, tags }) => (
  <Wrapper>
    <Image>
      <Link to={path} title={title}>
        <Img fluid={cover} />
      </Link>
    </Image>
    <Information>
      <Date>{date}</Date>
      <Link to={path}>
        <h1>{title}</h1>
      </Link>
      <TagsBlock list={tags} />
      {`${excerpt}...`}
    </Information>
  </Wrapper>
);

export default BlogList;

BlogList.propTypes = {
  cover: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};
