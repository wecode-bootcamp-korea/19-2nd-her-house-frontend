import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import Address from './Address';
import Modal from './Component/Modal';
import CompaniesList from './Component/CompaniesList';
import CompanyCard from './Component/CompanyCard';
import { DEFAULT_LAT, DEFAULT_LNG } from '../../config';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API_URL } from '../../config';
import axios from 'axios';
const { kakao } = window;

export default function Experts() {
  const [mapPosition, setMapPosition] = useState({
    x: DEFAULT_LNG,
    y: DEFAULT_LAT,
  });
  const [address, setAddress] = useState('');
  const mapRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [radius, setRadius] = useState(5);
  const [companyData, setCompanyData] = useState([]);

  const handleModal = status => {
    setModalOpen(status);
  };

  useEffect(() => {
    if (address !== '') mapInit();
    console.log(address);
  }, []);

  // useEffect(() => {}, [mapPosition]);

  const mapInit = () => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(mapPosition.y, mapPosition.x),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const position = new kakao.maps.LatLng(mapPosition.y, mapPosition.x);
    const marker = new kakao.maps.Marker({ position });

    marker.setMap(map);
  };

  useEffect(() => {
    if (!(address === '')) {
      axios
        .get('/data/companys.json')
        // .get(`${API_URL}/companies?location='${address}'&radius=${radius}`)
        .then(({ data }) => {
          setCompanyData(data.MESSAGE);
        })
        .catch(Error => {
          console.log(Error);
        });
    }
  }, [address]);

  return (
    <ExpertsWrapper>
      <Address setMapPosition={setMapPosition} setAddress={setAddress} />
      <RadiusWrap>
        <button onClick={() => handleModal(true)}>
          반경 5km
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </RadiusWrap>
      <Modal
        open={modalOpen}
        close={() => handleModal(false)}
        header="Modal heading"
      >
        반경 전환 버튼 부분
      </Modal>
      <Map id="map" ref={mapRef}></Map>
      <CompaniesList companyData={companyData} />
    </ExpertsWrapper>
  );
}

const ExpertsWrapper = styled.div`
  ${props => props.theme.flexCenter}
  margin-top: 100px;
  flex-direction: column;
`;

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

const Map = styled.div`
  width: 70vw;
  height: 60vh;
`;
