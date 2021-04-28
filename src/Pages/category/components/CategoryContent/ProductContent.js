import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
const DATA = {
  MESSAGE: 'SUCCESS',
  product_lists: [
    {
      id: 3,
      name: '가구3',
      price: '120000.00',
      manufacturer: '더웍',
      discount_rate: '0.50',
      star_rating: '3.0',
      review_number: 3,
      is_freedelivery: true,
      thumbnail_image:
        'https://images.unsplash.com/photo-1586158291800-2665f07bba79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 1,
      name: '가구1',
      price: '90000.00',
      manufacturer: '한샘',
      discount_rate: '0.30',
      star_rating: '4.7',
      review_number: 3,
      is_freedelivery: true,
      thumbnail_image:
        'https://images.unsplash.com/photo-1613575831056-0acd5da8f085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: '가구2',
      price: '80000.00',
      manufacturer: '일룸',
      discount_rate: '0.40',
      star_rating: '1.3',
      review_number: 3,
      is_freedelivery: false,
      thumbnail_image:
        'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ],
};

export default function ProductContent({ productList }) {
  const setProductPrice = price => Math.floor(price).toLocaleString();
  const setDiscountRate = discount_rate => discount_rate * 100 + '%';
  return (
    <ProductContentContainer>
      {DATA.product_lists?.map((list, index) => {
        const {
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
          <ProductContentWrap key={index}>
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
  height: 378px;
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
