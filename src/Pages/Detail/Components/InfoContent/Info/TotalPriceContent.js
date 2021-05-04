import React from 'react';
import styled from 'styled-components';

function TotalPriceContent() {
  return (
    <TotalPriceWrap>
      <OrderPrice>주문금액</OrderPrice>
      <TotalPrice>0원</TotalPrice>
    </TotalPriceWrap>
  );
}

const TotalPriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  width: 100%;
`;

const OrderPrice = styled.span`
  font-size: 13px;
  font-weight: 700;
`;

const TotalPrice = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export default TotalPriceContent;
