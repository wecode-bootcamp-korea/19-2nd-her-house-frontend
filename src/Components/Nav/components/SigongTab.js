import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SIGONG_DATA from '../navdata/SigongTabData';

function SigongTab() {
  return (
    <MainCategoryWrap>
      <MainCategory>
        {SIGONG_DATA.map(item => {
          return (
            <li>
              <Link className="MainCategory_Link" to="/">
                {item}
              </Link>
            </li>
          );
        })}
      </MainCategory>
    </MainCategoryWrap>
  );
}

const MainCategoryWrap = styled.div`
  border-bottom: 1px solid #dbdbdb;
`;

const MainCategory = styled.ul`
  display: flex;
  align-items: center;
  margin: 20px 9%;
  color: #424242;
  font-size: 15px;

  li {
    margin-right: 15px;

    .MainCategory_Link {
      margin: 8px 4px;
      padding: 6px 8px 4px;
      color: #424242;
      font-size: 15px;
      font-weight: 500;

      &:hover {
        color: ${props => props.theme.mainPink};
      }
    }
  }
`;

export default SigongTab;
