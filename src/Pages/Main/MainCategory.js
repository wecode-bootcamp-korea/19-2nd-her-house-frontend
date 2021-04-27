import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryList from '../../components/nav/components/CategoryList';
import HeadBanner from './components/HeadBanner';

const TITLE = '카테고리';

export default function MainCategory({ categoryList }) {
  return (
    <div>
      <WrapMainCategory>
        <HeadBanner TITLE={TITLE} />
      </WrapMainCategory>
      <CategoryList categoryList={categoryList} />
    </div>
  );
}

const WrapMainCategory = styled.div`
  margin: 50px 7% 0 7%;
`;
