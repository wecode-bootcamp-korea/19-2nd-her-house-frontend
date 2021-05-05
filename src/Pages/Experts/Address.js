import React, { useEffect } from 'react';
import useChangePosition from './useChangePosition';
import { DEFAULT_LAT, DEFAULT_LNG } from '../../config';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export default function Address({ setMapPosition, setAddress }) {
  const { mapPosition, address, handleChangeAddress } = useChangePosition({
    initialPosition: {
      x: DEFAULT_LNG,
      y: DEFAULT_LAT,
    },
  });

  useEffect(() => {
    setMapPosition(mapPosition);
    setAddress(address);
  }, [address]);

  return (
    <AddressWrapper>
      <div>
        <AddressMarkName>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>{address}</span>
        </AddressMarkName>
        <AddressChangeWrapper>
          <button onClick={handleChangeAddress}>주소변경</button>
        </AddressChangeWrapper>
      </div>
    </AddressWrapper>
  );
}

const AddressWrapper = styled.div`
  ${props => props.theme.flexCenter}
  background-color: #ffd1fa;
  width: 100%;

  > div {
    ${props => props.theme.flexCenter}
    width: 70vw;
    max-width: 70vw;

    > div {
      width: 50%;
    }
  }
`;

const AddressMarkName = styled.div`
  span {
    display: inline-block;
    padding: 5px;
  }
`;

const AddressChangeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 4px;

  button {
    width: 100px;
    background-color: white;
    border: 1px solid gray;
  }
`;
