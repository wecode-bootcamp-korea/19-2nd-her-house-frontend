import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

function CategoryListItem({ categoryList, onChangeClickId, clickListId }) {
  return (
    <ListItemWrap>
      {categoryList.map((list, index) => {
        return (
          <ListItems
            key={index}
            clickListId={clickListId}
            selectId={index}
            onClick={() => onChangeClickId(index)}
          >
            <Link to="/category">{list.name}</Link>
          </ListItems>
        );
      })}
    </ListItemWrap>
  );
}

const ListItemWrap = styled.ul`
  color: #424242;
`;

const ListItems = styled.li`
  font-size: 14px;
  cursor: pointer;

  a {
    color: #424242;
    ${({ selectId, clickListId, theme }) =>
      selectId === clickListId &&
      css`
        color: ${theme.mainPink};
        font-weight: 700;
      `}
  }

  :hover {
    opacity: 0.7;
  }

  & + & {
    margin-top: 10px;
  }
`;

export default CategoryListItem;
