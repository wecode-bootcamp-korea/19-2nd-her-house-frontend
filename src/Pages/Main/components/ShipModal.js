import React from 'react';
import styled from 'styled-components';

export default function ShipModal(props) {
  const { modalOpen, isFree } = props;

  return (
    <div>
      {modalOpen && (
        <WrapShipModal>
          <ShipModalContent>
            <span>무료배송만 보기</span>
            <input type="checkbox" onClick={isFree} />
          </ShipModalContent>
        </WrapShipModal>
      )}
    </div>
  );
}

const WrapShipModal = styled.section`
  position: absolute;
  width: 210px;
  height: 60px;
  margin-top: 5px;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  background-color: white;
  z-index: 1;
`;

const ShipModalContent = styled.div`
  display: flex;
  position: relative;
  top: 5px;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  font-size: 18x;
  font-weight: 500;

  input {
    width: 20px;
    height: 20px;
  }
`;
