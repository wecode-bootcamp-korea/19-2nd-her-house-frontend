import React from 'react';
import styled, { css } from 'styled-components';
import { FILTER_DATA } from './mockData';

function CategoryFilter({
  isView,
  onClickViewBtn,
  onChangeSortValue,
  queryValue,
}) {
  const getCategoryLabel = () => {
    switch (queryValue) {
      case '-star_rating':
        return '인기순';
      case 'price':
        return '낮은가격순';
      case '-price':
        return '높은가격순';
      default:
        return null;
    }
  };

  return (
    <CategoryFilterWrap>
      <TotalProduct>{`전체 ${(400000).toLocaleString()} 개`}</TotalProduct>
      <SelectButton onClick={onClickViewBtn}>{getCategoryLabel()}</SelectButton>
      <SortingContainer isView={isView}>
        {FILTER_DATA.map((list, index) => {
          const { label, queryName } = list;
          return (
            <SortingWrap key={index}>
              <SortSelectBtn>
                <SortContent>
                  <SelectSort
                    type="radio"
                    name={queryName}
                    checked={queryValue === queryName}
                    onChange={onChangeSortValue}
                  />
                  {label}
                  <CustomInput queryName={queryName} queryValue={queryValue} />
                </SortContent>
              </SortSelectBtn>
            </SortingWrap>
          );
        })}
      </SortingContainer>
    </CategoryFilterWrap>
  );
}

const CategoryFilterWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 23px 0 10px;
  color: #424242;
`;

const TotalProduct = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

const SelectButton = styled.button`
  background-color: white;
  :hover {
    opacity: 0.7;
  }
`;

const SortSelectBtn = styled(SelectButton)`
  display: flex;
  align-items: center;
  z-index: 1000;
  width: 100%;
  padding: 8px;
`;

const containerStyles = css`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  right: 0;
  top: 30px;
  padding: 16px 20px;
  max-width: 460px;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0px #424242;
  background-color: white;
`;

const SortingContainer = styled.ul`
  position: absolute;
  display: none;
  z-index: 1000;
  ${({ isView }) =>
    isView &&
    css`
      ${containerStyles}
    `};
`;

const SortingWrap = styled.li`
  padding: 8px;
  width: 50%;
`;

const SortContent = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 17px;
  cursor: pointer;
`;

const SelectSort = styled.input`
  position: relative;
  margin-right: 5px;
  width: 20px;
  height: 20px;
`;

const CustomInput = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  padding: 5px 5px 5px 0px;
  border-radius: 100%;
  border: 1px solid #ccc;
  background-color: white;

  ${({ queryName, queryValue, theme }) =>
    queryName === queryValue &&
    css`
      background-color: ${theme.mainPink};
    `}

  ::before {
    position: absolute;
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: white;
  }
`;

export default CategoryFilter;
