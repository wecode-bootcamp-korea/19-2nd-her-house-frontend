import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import TextBox from './TextBox';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Distance({ setRadius, radius }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [distance, setDistance] = useState([5, 10, 30, 50, 100]);

  const handleModal = status => {
    setModalOpen(status);
  };

  return (
    <>
      <RadiusWrap>
        <button onClick={() => handleModal(true)}>
          반경 {radius}km
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </RadiusWrap>
      <Modal
        open={modalOpen}
        close={() => handleModal(false)}
        header={<TextBox title="true">반경설정</TextBox>}
        subHeader={
          <TextBox>
            시공지와 업체 사이의 <span>거리를 설정</span>해 주세요.
          </TextBox>
        }
      >
        {distance.map((text, index) => {
          return (
            <DistansButton
              key={index}
              select={radius === text}
              onClick={() => {
                setRadius(text);
                setModalOpen(false);
              }}
            >
              {text}Km
            </DistansButton>
          );
        })}
      </Modal>
    </>
  );
}

const RadiusWrap = styled.div`
  width: 70vw;
  padding: 10px 0;

  > button {
    background-color: white;
    border: 1px solid ${props => props.theme.mainPink};
    border-radius: 5px;
    padding: 5px;

    svg {
      margin-left: 5px;
    }
  }
`;

const DistansButton = styled.button`
  background-color: white;
  padding: 8px 15px;
  margin-left: 10px;
  border-radius: 50px;
  border: 1px solid ${props => props.theme.mainPink};
  color: ${props => props.select && props.theme.mainPink};

  &:hover {
    color: ${props => props.theme.mainPink};
  }
`;
