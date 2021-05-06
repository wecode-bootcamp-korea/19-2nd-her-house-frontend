import React from 'react';
import styled from 'styled-components';

export default function DistanceButton({ select, onClick, children }) {
  return (
    <Button select={select} onClick={onClick}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  background-color: white;
  padding: 8px 15px;
  margin-left: 10px;
  border-radius: 50px;
  border: 1px solid ${props => props.theme.mainPink};
  color: ${props => props.select && props.theme.mainPink};

  &:hover {
    color: ${props => props.theme.mainPink};
  }
`;
