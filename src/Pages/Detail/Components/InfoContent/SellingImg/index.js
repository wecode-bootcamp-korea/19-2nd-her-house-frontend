import React from 'react';
import styled from 'styled-components';

function SellingImg({ productInfo }) {
  const { product_images, thumbnail_image } = productInfo;

  return (
    <ImgWrap>
      <SideImgWrap>
        {product_images?.map((image, idx) => {
          return (
            <SideImgList key={idx}>
              <SideImgBtn>
                <img src={image} alt="" />
              </SideImgBtn>
            </SideImgList>
          );
        })}
      </SideImgWrap>

      <MainImgWrap>
        <ImgSizeWrap>
          <img src={thumbnail_image} alt="" />
        </ImgSizeWrap>
      </MainImgWrap>
    </ImgWrap>
  );
}
const ImgWrap = styled.div`
  display: flex;
  margin-right: 30px;
  border-radius: 4px;
`;

const SideImgWrap = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const SideImgList = styled.li`
  margin-bottom: 8px;
`;

const SideImgBtn = styled.button`
  width: 56px;
  height: 56px;
  overflow: hidden;
  border-radius: 4px;
  background-color: red;

  img {
    width: 100%;
    height: 100%;
  }
`;

const MainImgWrap = styled.div`
  border-radius: 4px;
  height: 100%;
`;

const ImgSizeWrap = styled.div`
  width: 560px;
  height: 560px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default SellingImg;
