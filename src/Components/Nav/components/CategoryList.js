import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function CategoryList(props) {
  const { categoryList, isNav } = props;

  return (
    <WrapCategoryContent isNav={isNav}>
      {categoryList.map((item, idx) => (
        <li key={idx}>
          <div>
            <img src={item.image_url} alt="no img" />
            <Link className="categoryName" to="/">
              {item.name}
            </Link>
          </div>
        </li>
      ))}
    </WrapCategoryContent>
  );
}

const WrapCategoryContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 9%;
  height: 140px;
  list-style: none;
  overflow: hidden;

  li {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 20px;

      &:hover .categoryName {
        color: ${({ isNav }) => isNav && '#eb91e3'};
      }

      img {
        width: 90px;
        height: 90px;
        border-radius: 20%;

        cursor: pointer;
      }

      .categoryName {
        margin-top: 8px;
        color: #424242;
        text-align: center;
        font-weight: ${({ isNav }) => (isNav ? '600' : '500')};
        font-size: 13px;
      }
    }
  }
`;
