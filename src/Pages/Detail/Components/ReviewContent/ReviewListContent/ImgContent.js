import React from 'react';
import styled from 'styled-components';

function ImgContent({ image_url }) {
  return (
    <ImgContentWrap>
      <img src={image_url} alt="리뷰 이미지" />
    </ImgContentWrap>
  );
}
const ImgContentWrap = styled.div`
  width: 112px;
  height: 112px;
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default ImgContent;
