import React from 'react';
import styled from 'styled-components';

function DescriptionContent({ text }) {
  return (
    <DescriptionContentWrap>
      <Description>{text}</Description>
    </DescriptionContentWrap>
  );
}
const DescriptionContentWrap = styled.div`
  margin: 20px 0;
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 21px;
  color: #424242;
`;

export default DescriptionContent;
