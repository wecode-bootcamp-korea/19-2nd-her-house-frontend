import React from 'react';
import styled from 'styled-components';

function BarginContent({ discount_rate, price }) {
  const setProductPrice = price => Math.floor(price).toLocaleString();

  return (
    <ProductBarginWrap>
      <ProductBarginPercent>
        {discount_rate * 100}
        <Percent>%</Percent>
      </ProductBarginPercent>
      <ProductPrice>{setProductPrice(price)} 원 외</ProductPrice>
    </ProductBarginWrap>
  );
}

const ProductBarginWrap = styled.div`
  margin: 10x 0;
`;

const ProductBarginPercent = styled.span`
  margin-right: 5px;
  color: ${({ theme }) => theme.mainPink};
  font-size: 30px;
  font-weight: 700;
`;

const Percent = styled(ProductBarginPercent)`
  font-size: 20px;
  font-weight: 700;
`;

const ProductPrice = styled(ProductBarginPercent)`
  color: black;
`;

export default BarginContent;
