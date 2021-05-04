import React from 'react';
import styled from 'styled-components';

function ButtonContent() {
  return (
    <ButtonWrap>
      <BasketButton>장바구니</BasketButton>
      <OrderButton>바로구매</OrderButton>
    </ButtonWrap>
  );
}

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BasketButton = styled.button`
  padding: 15px;
  width: 49%;
  border: 2px solid ${({ theme }) => theme.mainPink};
  border-radius: 4px;
  background-color: white;
  color: ${({ theme }) => theme.mainPink};
  font-size: 16px;
  font-weight: 700;
`;

const OrderButton = styled(BasketButton)`
  background-color: ${({ theme }) => theme.mainPink};
  color: white;
`;

export default ButtonContent;
