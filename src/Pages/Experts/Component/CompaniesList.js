import React from 'react';
import styled from 'styled-components';
import CompanyCard from './CompanyCard';

export default function CompaniesList({ companyData }) {
  return (
    <CompanysWrapper>
      {companyData.map(company => {
        return <CompanyCard key={company.id} company={company} />;
      })}
    </CompanysWrapper>
  );
}

const CompanysWrapper = styled.div`
  width: 70vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  justify-items: center;
  grid-gap: 25px;
  margin: 40px auto 0;
`;
