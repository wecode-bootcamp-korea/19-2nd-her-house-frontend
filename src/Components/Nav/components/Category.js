import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CategoryList from './CategoryList';

export default function Category(props) {
  const { categoryList, handleCategoryOff } = props;
  return (
    <WrapStoreCategory
      className="WrapStoreCategory"
      onMouseLeave={handleCategoryOff}
    >
      <CategoryList categoryList={categoryList} isNav={true} />
    </WrapStoreCategory>
  );
}

const WrapStoreCategory = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #dbdbdb;
`;
