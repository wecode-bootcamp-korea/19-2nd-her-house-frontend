import React from 'react';
import styled from 'styled-components';

function TotalReviewContent({ reviewData }) {
  return (
    <TotlaReviewWrap>
      <div>
        <LeftContent>리뷰</LeftContent>
        <LeftContent>{reviewData.length}</LeftContent>
      </div>
      <div>
        <RightConent>리뷰쓰기</RightConent>
      </div>
    </TotlaReviewWrap>
  );
}

const TotlaReviewWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  width: 100%;
`;

const LeftContent = styled.span`
  font-size: 18px;
  font-weight: 600;

  & + & {
    color: ${({ theme }) => theme.mainPink};
  }

  & + &::before {
    content: '';
    margin-right: 5px;
  }
`;

const RightConent = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.mainPink};
`;

export default TotalReviewContent;
