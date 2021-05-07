import React from 'react';
import styled from 'styled-components';

export default function VariousModal(props) {
  const { filterOpen, handleFilterId } = props;

  return (
    <div>
      {filterOpen && (
        <WrapShipModal>
          {FILTER_DATA.map((filter, id) => {
            return (
              <FilterList key={id}>
                <li onClick={() => handleFilterId(id, filter.queryName)}>
                  {filter.label}
                </li>
              </FilterList>
            );
          })}
        </WrapShipModal>
      )}
    </div>
  );
}

const FILTER_DATA = [
  { id: 1, label: '인기순', queryName: '-star_rating' },
  { id: 2, label: '낮은가격순', queryName: 'price' },
  { id: 3, label: '높은가격순', queryName: '-price' },
];

const WrapShipModal = styled.section`
  position: absolute;
  right: 10%;
  width: 150px;
  height: 200px;
  margin-top: 5px;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  background-color: white;
  z-index: 1;
`;

const FilterList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12%;

  li {
    margin-bottom: 15px;

    cursor: pointer;
  }
`;
