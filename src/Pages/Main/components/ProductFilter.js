import React, { useState } from 'react';
import styled from 'styled-components';
import ShipModal from './ShipModal';
import VariousModal from './VariousModal';
import { AiOutlineDown } from 'react-icons/ai';

export default function ProductFilter(props) {
  const {
    isFree,
    checked,
    handleFilterId,
    currentId,
    toggleFilter,
    filterOpen,
  } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <WrapFilter>
      <WrapFilterContent>
        <ShipFilter onClick={toggleModal} checked={checked}>
          <span>배송</span>
          <AiOutlineDown />
        </ShipFilter>
        {checked && <FreeShipReset onClick={isFree}>초기화</FreeShipReset>}
        <VariousFilter onClick={toggleFilter}>
          {currentId === 1 && <span>인기순</span>}
          {currentId === 2 && <span>낮은가격순</span>}
          {currentId === 3 && <span>높은가격순</span>}
          <AiOutlineDown />
        </VariousFilter>
      </WrapFilterContent>
      <ShipModal isFree={isFree} checked={checked} modalOpen={modalOpen} />
      <VariousModal
        filterOpen={filterOpen}
        currentId={currentId}
        handleFilterId={handleFilterId}
        toggleModal={toggleModal}
      />
    </WrapFilter>
  );
}

const WrapFilter = styled.div`
  margin: 10px 3%;
`;

const WrapFilterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShipFilter = styled.button`
  display: flex;
  align-items: center;
  line-height: 19px;
  padding: 7px 8px 6px;
  border-radius: 10px;
  color: ${({ checked }) => (checked ? '#eb91e3' : '#757575')};
  background-color: #f5f5f5;
  font-size: 15px;
  font-weight: 600;
`;

const VariousFilter = styled.button`
  display: flex;
  align-items: center;
  line-height: 14px;
  padding: 7px 8px 6px;
  border-radius: 10px;
  color: #757575;
  background-color: #f5f5f5;
  font-size: 12px;
  font-weight: 600;
`;

const FreeShipReset = styled.button`
  position: relative;
  right: 470px;
  width: 70px;
  height: 30px;
  border: 1px solid ${props => props.theme.mainPink};
  border-radius: 10px;
  color: white;
  background-color: ${props => props.theme.mainPink};
`;
