import React from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

function ReviewContent({ review_number, star_rating }) {
  return (
    <ReviewWrap review_number={review_number}>
      <FaStar />
      <Review>{review_number}개 리뷰</Review>
    </ReviewWrap>
  );
}

const ReviewWrap = styled.span`
  display: flex;
  align-items: center;
  margin: 10px 0;
  color: #9e9e9e;
  font-size: 14px;
  font-weight: 600;

  svg {
    padding-bottom: 3px;
    color: ${({ theme }) => theme.mainPink};
  }
`;

const Review = styled.span`
  margin: 0 2px;
  color: ${({ theme }) => theme.mainPink};
`;

export default ReviewContent;
