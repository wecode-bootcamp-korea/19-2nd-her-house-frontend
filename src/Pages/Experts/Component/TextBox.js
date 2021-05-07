import React from 'react';
import styled, { css } from 'styled-components';

export default function TextBox({ children, display, title, bold }) {
  return (
    <TextWrapper title={title} display={display} bold={bold}>
      {children}
    </TextWrapper>
  );
}

const TextWrapper = styled.div`
  display: ${props => props.display || 'block'};
  padding: 5px 0;
  font-size: 0.8rem;
  font-weight: ${props => props.bold && 'bold'};

  ${props =>
    props.title &&
    css`
      font-size: 1rem;
      font-weight: bold;
      margin: 10px 0;
      padding: 0;
    `}

  path {
    background-color: ${props => props.mainPink};
  }
  span {
    color: ${props => props.theme.mainPink};
  }
`;
