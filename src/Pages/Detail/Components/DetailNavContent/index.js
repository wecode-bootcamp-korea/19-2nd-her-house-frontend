import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LIST_NAME = ['상품정보', '리뷰', '문의', '배송/환불', '추천'];

function DetailNavContent() {
  return (
    <WrapProductDetail>
      <ProductDetailTab>
        <ProductTabContent>
          {LIST_NAME.map((item, idx) => {
            return (
              <ProductTabList key={idx}>
                <Link to="">{item}</Link>
              </ProductTabList>
            );
          })}
        </ProductTabContent>
      </ProductDetailTab>
    </WrapProductDetail>
  );
}

const WrapProductDetail = styled.div`
  position: sticky;
  z-index: 100;
  width: 100%;
  margin: 50px 0;
  padding: 0 10px;
  border-bottom: 1px solid #dbdbdb;
  background-color: #fafafa;
`;

const ProductDetailTab = styled.nav`
  display: flex;
  justify-content: center;
  margin: 0 9%;
`;

const ProductTabContent = styled.ol`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 66%;
`;

const ProductTabList = styled.li`
  display: flex;
  align-items: center;
  padding: 14px 10px 15px;
  margin-right: 14px;
  color: #424242;
  font-size: 17px;
  font-weight: 500;

  span {
    margin-left: 2px;
    font-size: 13px;
    color: gray;
  }
`;

export default DetailNavContent;
