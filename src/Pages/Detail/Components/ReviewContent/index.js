import React from 'react';
import styled from 'styled-components';
import ReviewListContent from './ReviewListContent';
import StarRatingContent from './StarRatingContent';
import TotalReviewContent from './TotalReviewContent';

function ReviewContent({ reviewData }) {
  return (
    <ReviewContentWrap>
      <TotalReviewContent reviewData={reviewData} />
      <StarRatingContent />
      <ReviewListContent reviewData={reviewData} />
    </ReviewContentWrap>
  );
}

const ReviewContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export default ReviewContent;
