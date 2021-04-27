import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainProductList from './components/MainProductList';
import HeadBanner from './components/HeadBanner';
import ProductFilter from './components/ProductFilter';

export default function MainProduct(props) {
  const {
    productlist,
    currentId,
    filterOpen,
    toggleFilter,
    handleFilterId,
  } = props;
  const TITLE = '인기상품';
  const [checked, setChecked] = useState(false);

  const isFree = () => {
    setChecked(!checked);
  };

  useEffect(() => {}, [checked]);
  return (
    <div>
      <WrapMainProduct>
        <HeadBanner TITLE={TITLE} />
        <ProductFilter
          isFree={isFree}
          checked={checked}
          currentId={currentId}
          handleFilterId={handleFilterId}
          productlist={productlist}
          filterOpen={filterOpen}
          toggleFilter={toggleFilter}
        />
        <WrapPopItem>
          {productlist.map(item => {
            if (checked) {
              return (
                item.is_freedelivery && (
                  <MainProductList key={item.id} item={item} istotal={true} />
                )
              );
            } else {
              return (
                <MainProductList key={item.id} item={item} istotal={true} />
              );
            }
          })}
        </WrapPopItem>
      </WrapMainProduct>
    </div>
  );
}

const WrapMainProduct = styled.div`
  margin: 50px 7% 0 7%;
`;

const WrapPopItem = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 10px 3%;
`;
