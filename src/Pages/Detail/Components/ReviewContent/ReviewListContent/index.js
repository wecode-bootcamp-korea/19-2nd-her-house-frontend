import React from 'react';
import styled from 'styled-components';
import DescriptionContent from './DescriptionContent';
import HelpContent from './HelpContent';
import ImgContent from './ImgContent';
import WriterContent from './WriterContent';

function ReviewListContent({ reviewData }) {
  return (
    <ReviewListWrap>
      {reviewData.map((review, idx) => {
        const { user, text, image_url } = review;

        return (
          <ReviewBox key={idx}>
            <WriterContent user={user} />
            <ImgContent image_url={image_url} />
            <DescriptionContent text={text} />
            <HelpContent />
          </ReviewBox>
        );
      })}
    </ReviewListWrap>
  );
}

const ReviewListWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const ReviewBox = styled.div`
  border-bottom: 1px solid rgb(245, 245, 245);
  margin: 20px 0;
`;

export default ReviewListContent;
