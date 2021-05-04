import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';

function ProductContent(props) {
  const { productList } = props;
  const setProductPrice = price => Math.floor(price).toLocaleString();
  const setDiscountRate = discount_rate => parseInt(discount_rate * 100) + '%';
  return (
    <ProductContentContainer>
      {productList.map((list, index) => {
        const {
          id,
          thumbnail_image,
          manufacturer,
          name,
          discount_rate,
          price,
          star_rating,
          review_number,
          is_freedelivery,
        } = list;
        return (
          <ProductContentWrap
            onClick={() => props.history.push(`/category/${id}`)}
            key={index}
          >
            <ProductContents>
              <ProductImgBox>
                <ProductImg src={thumbnail_image} alt="상품 섬네일 이미지" />
              </ProductImgBox>
              <ProductInfo>
                <StoreName>{manufacturer}</StoreName>
                <ProductName>{name}</ProductName>
                <ProductBarginWrap>
                  <ProductBarginPercent>
                    {setDiscountRate(discount_rate)}
                  </ProductBarginPercent>
                  <ProductPrice>{setProductPrice(price)}외</ProductPrice>
                </ProductBarginWrap>
                <ReviewContent>
                  <FaStar /> <Review>{star_rating}</Review>
                  <Review>리뷰</Review>
                  <Review>{review_number}</Review>
                </ReviewContent>
                {is_freedelivery && <FreeDelivery>무료배송</FreeDelivery>}
              </ProductInfo>
            </ProductContents>
          </ProductContentWrap>
        );
      })}
    </ProductContentContainer>
  );
}

const ProductContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ProductContentWrap = styled.div`
  padding-bottom: 30px;
  width: 270px;
`;

const ProductContents = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProductImgBox = styled.div`
  width: 100%;
  height: 270px;
  border-radius: 10px;
  background-color: black;
  overflow: hidden;
`;

const StoreName = styled.span`
  display: block;
  margin: 5px 0;
  color: #757575;
  font-size: 13px;
  font-weight: 400;
`;

const ProductName = styled(StoreName)`
  font-size: 13px;
  color: black;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: 0.2s linear;

  :hover {
    transform: scale(1.2);
    transition: all 0.2s linear;
  }
`;

const ProductInfo = styled.div`
  padding: 0 10px;
  width: 100%;
  height: 125px;
`;

const FreeDelivery = styled.span`
  padding: 2.5px;
  border-radius: 7.5%;
  color: #939393;
  background-color: #ededed;
  font-size: 12px;
  font-weight: 700;
`;

const ReviewContent = styled(StoreName)`
  display: flex;
  align-items: center;
  color: #9e9e9e;
  font-size: 12px;
  font-weight: 900;

  svg {
    padding-bottom: 3px;
    color: ${({ theme }) => theme.mainPink};
  }
`;

const Review = styled.span`
  margin: 0 2px;
  color: black;

  & + & {
    color: #9e9e9e;
  }
`;

const ProductBarginWrap = styled.div`
  margin: 5px 0;
`;

const ProductBarginPercent = styled.span`
  margin-right: 5px;
  color: ${({ theme }) => theme.mainPink};
  font-size: 17px;
  font-weight: 700;
`;

const ProductPrice = styled(ProductBarginPercent)`
  color: black;
`;

export default withRouter(ProductContent);
