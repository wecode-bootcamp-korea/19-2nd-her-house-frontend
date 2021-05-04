import React from 'react';
import styled from 'styled-components';

function DescriptionContent({ productInfo }) {
  const { description_image } = productInfo;

  return (
    <DesWrap>
      <DesImgWrap>
        <img src={description_image} alt="상품설명,이미지" />
      </DesImgWrap>
    </DesWrap>
  );
}

const DesWrap = styled.div``;

const DesImgWrap = styled.div`
  width: 100% !important;
  max-width: 100% !important;

  img {
    max-width: 700px;
    height: auto;
    display: block;
  }
`;
export default DescriptionContent;
