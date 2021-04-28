import React from 'react';
import styled from 'styled-components';
import CategoryLocation from './CategoryLocation';
import CategoryCarousel from './CategoryCarousel';
import CategoryFilter from './CategoryFilter';
import ProductContent from './ProductContent';

export default function CategoryContent({
  categoryList,
  clickListId,
  productList,
  isView,
  onClickViewBtn,
  onChangeSortValue,
  queryValue,
}) {
  return (
    <CategoryContentWrap>
      <CategoryLocation categoryList={categoryList} clickListId={clickListId} />
      <CategoryCarousel />
      <CategoryFilter
        isView={isView}
        onClickViewBtn={onClickViewBtn}
        onChangeSortValue={onChangeSortValue}
        queryValue={queryValue}
      />
      <ProductContent productList={productList} />
    </CategoryContentWrap>
  );
}

const CategoryContentWrap = styled.div`
  margin: 0 10px;
`;
