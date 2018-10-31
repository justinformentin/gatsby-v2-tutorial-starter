import React from 'react';
import { Link } from 'gatsby'
import styled from 'react-emotion'

const TagsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  a {
    margin-right: .5rem;
    color: ${props => props.theme.colors.black.blue};
    padding: .25rem .5rem;
    border: solid 1px ${props => props.theme.colors.black.blue};
    border-radius: 10px;
    &:hover {
      color: ${props => props.theme.colors.white.light};
      background: ${props => props.theme.colors.primary.light};
      border: solid 1px ${props => props.theme.colors.primary.light};
    }
`;

const TagsBlock = ({ list }) => (
  <TagsContainer>
    {list &&
      list.map((tag) => {
        const upperTag = tag.charAt(0).toUpperCase() + tag.slice(1)
        return (
        <Link key={tag} to={`/tags/${tag}`}>
          <span>{upperTag}</span>
        </Link>
        )
    })}
  </TagsContainer>
);

export default TagsBlock
