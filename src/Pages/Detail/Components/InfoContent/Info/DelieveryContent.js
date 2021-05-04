import React from 'react';
import styled from 'styled-components';

function DelieveryContent({ delivery_method, delivery_fee }) {
  return (
    <FreeDeliveryWrap>
      <DeliveryTitleWrap>
        <DeliveryText>배송</DeliveryText>
      </DeliveryTitleWrap>
      {delivery_method && (
        <FreeTitleWrap>
          <FreeDeliveryText>무료배송</FreeDeliveryText>
          <ExceptDelivery>
            • 예외 상품이 있을 수 있습니다 (개별 상품정보 참고)
          </ExceptDelivery>
          <ExceptDelivery>
            • 조건에 따라 추가비용 발생 가능 (상품 정보 참고)
          </ExceptDelivery>
        </FreeTitleWrap>
      )}
      {delivery_fee && (
        <FreeTitleWrap>
          <FreeDeliveryText>
            1개당 {parseInt(delivery_fee)}원 착불
          </FreeDeliveryText>
          <ExceptDelivery>업체 직접 배송 | 15일 이내 배송</ExceptDelivery>
        </FreeTitleWrap>
      )}
    </FreeDeliveryWrap>
  );
}

const FreeDeliveryWrap = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #424242;
`;

const DeliveryTitleWrap = styled.div`
  width: 10%;
`;

const FreeTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const DeliveryText = styled.span`
  display: block;
  font-size: 14px;
  color: #828c94;
`;

const ExceptDelivery = styled(DeliveryText)`
  margin-bottom: 5px;
  font-size: 11px;
  font-weight: 400;
`;

const FreeDeliveryText = styled(DeliveryText)`
  margin-bottom: 10px;
  color: black;
  font-weight: 700;
`;
export default DelieveryContent;
