import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Address from './Address';
import DistanceBox from './Component/Distance';
import CompaniesList from './Component/CompaniesList';
import KakaoMap from './Component/KakaoMap';
import { DEFAULT_LAT, DEFAULT_LNG } from '../../config';
import { API_URL } from '../../config';
import axios from 'axios';

export default function Experts() {
  const [mapPosition, setMapPosition] = useState({
    x: DEFAULT_LNG,
    y: DEFAULT_LAT,
  });
  const [address, setAddress] = useState('');
  const [radius, setRadius] = useState(5);
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    console.log(`${API_URL}/companies?location='${address}'&radius=${radius}`);
    if (!(address === '')) {
      axios
        // .get('/data/companys.json')
        .get(`${API_URL}/companies?location='${address}'&radius=${radius}`)
        .then(({ data }) => {
          setCompanyData(data.MESSAGE);
          console.log(data.MESSAGE);
        })
        .catch(Error => {
          console.log(Error);
        });
    }
  }, [address]);

  return (
    <ExpertsWrapper>
      <Address setMapPosition={setMapPosition} setAddress={setAddress} />
      <DistanceBox setRadius={setRadius} radius={radius} />
      <KakaoMap
        mapPosition={mapPosition}
        address={address}
        companyData={companyData}
      />
      <CompaniesList companyData={companyData} />
    </ExpertsWrapper>
  );
}

const ExpertsWrapper = styled.div`
  ${props => props.theme.flexCenter}
  margin-top: 100px;
  flex-direction: column;
`;
