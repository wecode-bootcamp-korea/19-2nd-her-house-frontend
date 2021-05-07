import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavMenuData from '../../Nav/navdata/NavMenuData';

export default function NavMenuTab({
  currentId,
  handleCategoryOn,
  handleCategoryOff,
}) {
  return (
    <WrapNavMenuData>
      <MainCategory>
        {currentId === 1 &&
          NavMenuData.COMMUNITY.map(item => {
            return (
              <li>
                <Link className="MainCategory_Link" to="/">
                  {item}
                </Link>
              </li>
            );
          })}
        {currentId === 2 &&
          NavMenuData.STORE.map((item, idx) => {
            let tag =
              Number(idx) === 1 ? (
                <li>
                  <Link
                    className="MainCategory_Link"
                    to="/category"
                    onMouseEnter={handleCategoryOn}
                  >
                    {item}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="MainCategory_Link"
                    to="/"
                    onMouseEnter={handleCategoryOff}
                  >
                    {item}
                  </Link>
                </li>
              );
            return tag;
          })}
        {currentId === 3 &&
          NavMenuData.SIGONG.map(item => {
            return (
              <li>
                <Link className="MainCategory_Link" to="/experts">
                  {item}
                </Link>
              </li>
            );
          })}
      </MainCategory>
    </WrapNavMenuData>
  );
}

const WrapNavMenuData = styled.div`
  border-bottom: 1px solid #dbdbdb;
`;

const MainCategory = styled.ul`
  display: flex;
  align-items: center;
  margin: 20px 10%;
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
