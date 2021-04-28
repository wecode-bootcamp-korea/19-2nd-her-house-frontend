import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { withRouter } from 'react-router';
import CategoryContent from './Components/CategoryContent';
import CategoryList from './Components/CategoryList';
import { API_URL } from '../../config';

function Category() {
  const [clickListId, setClickListId] = useState(0);
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [isView, setIsView] = useState(false);
  const [queryValue, setQueryValue] = useState('-price');

  const onChangeClickId = index => {
    setClickListId(index);
  };

  const onClickViewBtn = () => {
    setIsView(!isView);
  };

  const onChangeSortValue = e => {
    const { name } = e.target;
    setQueryValue(name);
    onClickViewBtn();
  };

  useEffect(() => {
    async function getData() {
      const CATEGORYLIST_URL = `${API_URL}/store/category`;
      const PRODUCTLIST_URL = `${API_URL}/store?category-id=3&ordering=${queryValue}`;

      try {
        const categoryList = await axios.get(CATEGORYLIST_URL);
        const productList = await axios.get(PRODUCTLIST_URL);
        setCategoryList(categoryList.data.category_lists);
        setProductList(productList.data.product_lists);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [queryValue]);

  return (
    <CategoryFeedContainer>
      <CategoryFeedWrap>
        <CategoryList
          categoryList={categoryList}
          clickListId={clickListId}
          onChangeClickI
          d={onChangeClickId}
        />
        <CategoryContent
          categoryList={categoryList}
          clickListId={clickListId}
          productList={productList}
          isView={isView}
          onClickViewBtn={onClickViewBtn}
          onChangeSortValue={onChangeSortValue}
          queryValue={queryValue}
        />
      </CategoryFeedWrap>
    </CategoryFeedContainer>
  );
}

const CategoryFeedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const CategoryFeedWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1136px;
  margin: 0 182px;
  margin-top: 20px;
`;

export default withRouter(Category);
