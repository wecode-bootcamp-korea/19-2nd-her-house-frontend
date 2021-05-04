import React from 'react';
import styled from 'styled-components';
import BarginContent from './BarginContent';
import ButtonContent from './BuyBtnContent';
import DelieveryContent from './DelieveryContent';
import ManufacturerContent from './ManufacturerContent';
import ReviewContent from './ReviewContent';
import SelectOptionContent from './SelectOptionContent';
import TotalPriceContent from './TotalPriceContent';

function Info({ productInfo }) {
  const {
    color,
    size,
    price,
    delivery_method,
    delivery_fee,
    discout_rate,
    review_number,
    manufacturer,
    name,
    star_rating,
  } = productInfo;
  return (
    <ProductContentWrap>
      <ProductContents>
        <ProductInfo>
          <StoreName>{manufacturer}</StoreName>
          <ProductName>{name}</ProductName>
          <ReviewContent
            star_rating={star_rating}
            review_number={review_number}
          />
          <BarginContent discount_rate={discout_rate} price={price} />
          <DelieveryContent
            delivery_method={delivery_method}
            delivery_fee={delivery_fee}
          />
        </ProductInfo>
      </ProductContents>
      <ManufacturerContent manufacturer={manufacturer} />
      <SelectOptionContent color={color} size={size} />
      <TotalPriceContent />
      <ButtonContent />
    </ProductContentWrap>
  );
}

const ProductContentWrap = styled.div`
  padding: 0 20px 30px 20px;
  width: 100%;
`;

const ProductContents = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StoreName = styled.span`
  display: block;
  margin: 5px 0;
  color: #757575;
  font-size: 14px;
  font-weight: 500;
`;

const ProductName = styled(StoreName)`
  margin: 10px 0;
  font-size: 22px;
  color: black;
`;

const ProductInfo = styled.div`
  width: 100%;
`;

export default Info;
