import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CategoryList from './CategoryList';
import { API } from '../../../config';

export default function Category({ handleCategoryOff }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch('/data/categoryData.json')
      .then(res => res.json())
      .then(categoryList => setCategoryList(categoryList.category_lists));
  }, []);

  // useEffect(() => {
  //   fetch(`${API}/store/category`)
  //     .then(res => res.json())
  //     .then(categoryList => setCategoryList(categoryList.category_lists));
  // }, []);

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
