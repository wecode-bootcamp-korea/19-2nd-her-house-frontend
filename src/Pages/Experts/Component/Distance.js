import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import TextBox from './TextBox';
import DistanceButton from './DistanceButton';
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
            <DistanceButton
              key={index}
              select={radius === text}
              onClick={() => {
                setRadius(text);
                handleModal(false);
              }}
            >
              {text}Km
            </DistanceButton>
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
