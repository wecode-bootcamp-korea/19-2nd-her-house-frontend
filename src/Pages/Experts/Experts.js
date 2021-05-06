import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Address from './Address';
import DistanceBox from './Component/Distance';
import CompaniesList from './Component/CompaniesList';
import KakaoMap from './Component/KakaoMap';
import DistanceButton from './Component/DistanceButton';
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
  const [pageData, setPageData] = useState({
    page: 1,
    maxPage: 1,
  });

  useEffect(() => {
    if (!(address === '')) {
      axios
        // .get('/data/companys.json')
        .get(
          `${API_URL}/companies?location='${address}'&radius=${radius}&page=1`
        )
        .then(({ data }) => {
          setCompanyData(data.MESSAGE);
          setPageData({ ...pageData, maxPage: data.max_page });
        })
        .catch(Error => {
          console.log(Error);
        });
    }
  }, [address, radius]);

  const addHandleData = page => {
    // console.log(page);
    if (page > 1 && page <= pageData.maxPage) {
      axios
        .get(
          `${API_URL}/companies?location='${address}'&radius=${radius}&page=${page}`
        )
        .then(({ data }) => {
          setPageData({ ...pageData, page });

          const newPageData = [...companyData];

          for (let i = 0; i < data.MESSAGE.length; i++) {
            newPageData.push(data.MESSAGE[i]);
          }

          setCompanyData(newPageData);
        })
        .catch(Error => {
          console.log(Error);
        });
    }
  };

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
      {pageData.maxPage > pageData.page && (
        <DistanceButton onClick={() => addHandleData(pageData.page + 1)}>
          더보기
        </DistanceButton>
      )}
    </ExpertsWrapper>
  );
}

const ExpertsWrapper = styled.div`
  ${props => props.theme.flexCenter}
  margin-top: 100px;
  flex-direction: column;
`;
