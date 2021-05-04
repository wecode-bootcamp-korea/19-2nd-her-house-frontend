import React from 'react';
import styled from 'styled-components';
import { RiHome2Line } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';

export default function ManufacturerContent({ manufacturer }) {
  return (
    <ManufacturerWrap>
      <ManufacturerBox>
        <RiHome2Line />
        <ManufacturerName>{manufacturer}</ManufacturerName>
      </ManufacturerBox>

      <BrandHomeWrap>
        <BrandHome>브랜드홈</BrandHome>
        <IoIosArrowForward />
      </BrandHomeWrap>
    </ManufacturerWrap>
  );
}

const ManufacturerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 30px;
`;

const ManufacturerBox = styled.div`
  display: flex;
  color: #424242;
  font-size: 15px;
  svg {
    margin-right: 5px;
  }
`;

const ManufacturerName = styled.span`
  font-weight: 500;
`;

const BrandHomeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 20px;
  background-color: rgb(245, 245, 245);
  svg {
    color: rgb(130, 140, 148);
  }
`;

const BrandHome = styled.span`
  color: rgb(130, 140, 148);
  font-size: 14px;
  font-weight: 500;
`;
