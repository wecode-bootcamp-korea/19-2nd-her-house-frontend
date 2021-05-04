import React from 'react';
import styled from 'styled-components';
import SellingImg from './SellingImg';
import DetailInfo from './Info';

function InfoContent({ productInfo }) {
  return (
    <DetailContentWrap>
      <DetailInfoWrap>
        <SellingImg productInfo={productInfo}></SellingImg>
        <DetailInfo productInfo={productInfo} />
      </DetailInfoWrap>
    </DetailContentWrap>
  );
}

const DetailContentWrap = styled.div`
  display: flex;
`;

const DetailInfoWrap = styled.div`
  display: flex;
  width: 100%;
`;
export default InfoContent;
