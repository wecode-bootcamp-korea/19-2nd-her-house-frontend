import React from 'react';
import styled from 'styled-components';

function HelpContent() {
  return (
    <HelpContentWrap>
      <HelpButton>도움이 돼요</HelpButton>
      <HelpDes>87명에게 도움이 되었습니다.</HelpDes>
    </HelpContentWrap>
  );
}
const HelpContentWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

const HelpButton = styled.button`
  padding: 7.5px 10px;
  margin-right: 10px;
  border: 1px solid ${({ theme }) => theme.mainPink};
  border-radius: 4px;
  background-color: white;
  color: ${({ theme }) => theme.mainPink};
`;

const HelpDes = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #424242;
  margin-top: 8px;
`;
export default HelpContent;
