import React from 'react'
import styled from 'react-emotion'

const Wrapper = styled.section`
  text-align: ${props => (props.center ? 'center' : '')};
  margin:auto;
  padding: 3rem 1.5rem;
  width: 60%;
  max-width: ${props => props.theme.layout[props.type]};
  height:100%;
  flex:1;
`

const Container = ({ children, type, className, center }) => (
  <Wrapper className={className} type={type} center={center}>
    {children}
  </Wrapper>
)

export default Container
