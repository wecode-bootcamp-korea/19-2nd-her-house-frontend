import React from 'react';
import styled from 'styled-components';
import TextBox from './TextBox';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CompanyCard({ company }) {
  const {
    name,
    address,
    distance,
    thumbnail,
    star_rating,
    contract_number,
    lower_price,
    upper_price,
  } = company;
  return (
    <>
      <CompanyCardBox>
        <CompanyImgBox>
          <CompanyImg src={thumbnail} />
        </CompanyImgBox>
        <TextBox title="true">{name}</TextBox>
        <TextBox>
          {address}&#183;
          <span>{distance}km</span>
        </TextBox>
        <TextBox display="inline-block" bold="true">
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          {Number(star_rating).toFixed(1)}
        </TextBox>
        <TextBox display="inline-block">
          &#183; 최근계약
          <span>{contract_number}</span>건
        </TextBox>
        <TextBox>
          {(lower_price || upper_price) && '평당'}
          {lower_price && <span> {Math.round(lower_price / 10000)}~</span>}
          {upper_price && <span>{Math.round(upper_price / 10000)}만원</span>}
          {!lower_price && upper_price && '이상'}
        </TextBox>
      </CompanyCardBox>
    </>
  );
}

const CompanyCardBox = styled.div`
  width: 22vw;
  height: 56vh;
  margin: 0 10px;
`;

const CompanyImgBox = styled.div`
  ${props => props.theme.flexCenter}
  width: 100%;
  height: 40vh;
  background-color: #dbdbdb;
  border-radius: 10px;
`;

const CompanyImg = styled.img`
  width: 90%;
  height: 100%;
  margin: auto;
`;
