import React from 'react';
import styled from 'styled-components';
import MainProductList from './components/MainProductList';
import HeadBanner from './components/HeadBanner';

export default function TodayDeal(props) {
  const { productlist } = props;
  const TITLE = '오늘의 딜';

  return (
    <div>
      <WrapTodayDeal>
        <HeadBanner TITLE={TITLE} />
        <WrapDealItem>
          {productlist.map((item, idx) => {
            return (
              item.hot_deal === 1 && <MainProductList key={idx} item={item} />
            );
          })}
        </WrapDealItem>
      </WrapTodayDeal>
    </div>
  );
}

const WrapTodayDeal = styled.div`
  margin: 50px 7% 0 7%;
`;

const WrapDealItem = styled.div`
  display: flex;
  margin: 10px 3%;
  overflow: hidden;
`;
