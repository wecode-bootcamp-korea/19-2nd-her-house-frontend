import React from 'react';
import styled from 'styled-components';
import CategoryListItem from './CategoryListItem';

function CategoryList(props) {
  return (
    <ListContainer>
      <CategoryListWrap>
        <h1>가구</h1>
        <CategoryListItem {...props} />
      </CategoryListWrap>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  width: 100%;
  padding: 0 10px;
`;

const CategoryListWrap = styled.section`
  h1 {
    margin-bottom: 27px;
    font-size: 25px;
    font-weight: 700;
  }
`;

export default CategoryList;
