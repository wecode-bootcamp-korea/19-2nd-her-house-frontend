import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function HeadBanner({ TITLE }) {
  return (
    <HeadBannerTop>
      <TopBanner>{TITLE}</TopBanner>
      {TITLE === '오늘의 딜' && <Links>더보기</Links>}
    </HeadBannerTop>
  );
}

const HeadBannerTop = styled.article`
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
`;

const TopBanner = styled.h2`
  display: block;
  color: black;
  font-weight: 500;
  font-size: 20px;
`;

const Links = styled(Link)`
  color: #ff7777;
  font-weight: 500;
  font-size: 15px;
  padding-right: 7px;
`;
