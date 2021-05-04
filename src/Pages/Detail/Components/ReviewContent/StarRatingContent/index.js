import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

function StarRatingContent() {
  return (
    <StarRatingWrap>
      <TotalRatingWrap>
        <ContentWrap>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <StarRating>4.7</StarRating>
        </ContentWrap>
      </TotalRatingWrap>

      <RatingProgressWrap>
        <ProgressBox>
          <RatingScore>5점</RatingScore>
          <RatingBar max="100" value="70"></RatingBar>
        </ProgressBox>
        <ProgressBox>
          <RatingScore>5점</RatingScore>
          <RatingBar max="100" value="70"></RatingBar>
        </ProgressBox>
        <ProgressBox>
          <RatingScore>5점</RatingScore>
          <RatingBar max="100" value="70"></RatingBar>
        </ProgressBox>
        <ProgressBox>
          <RatingScore>5점</RatingScore>
          <RatingBar max="100" value="70"></RatingBar>
        </ProgressBox>
        <ProgressBox>
          <RatingScore>5점</RatingScore>
          <RatingBar max="100" value="70"></RatingBar>
        </ProgressBox>
      </RatingProgressWrap>
    </StarRatingWrap>
  );
}

const StarRatingWrap = styled.div`
  display: flex;
  padding: 24px 0;
  width: 100%;
  border-radius: 4px;
  background-color: rgb(245, 245, 245);
`;

const TotalRatingWrap = styled.div`
  ${({ theme }) => theme.flexCenter}
  width: 40%;
  border-right: 1px solid #9e9e9e;
`;

const ContentWrap = styled.div`
  ${({ theme }) => theme.flexCenter}
  width: 100%;
  svg {
    color: ${({ theme }) => theme.mainPink};
    font-size: 28px;
  }
`;

const StarRating = styled.span`
  margin-left: 12px;
  color: #424242;
  font-size: 32px;
  font-weight: 700;
`;

const RatingProgressWrap = styled.div`
  ${({ theme }) => theme.flexCenter}
  flex-direction: column;
  width: 60%;
`;

const ProgressBox = styled.div`
  color: #9e9e9e;
  font-size: 12px;
  font-weight: 400;
`;

const RatingScore = styled.label`
  margin-right: 5px;
`;

const RatingBar = styled.progress``;

export default StarRatingContent;
