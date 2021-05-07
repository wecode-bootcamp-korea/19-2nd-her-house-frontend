import React from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';

function SlideItem(props) {
  return (
    <WrapPaper>
      <Paper className="paper">
        <SlideImg src={props.item.img} alt="no img" />
      </Paper>
    </WrapPaper>
  );
}

export default SlideItem;

const WrapPaper = styled.div`
  .paper {
    height: 380px;
  }
`;
const SlideImg = styled.img`
  width: 100%;
  height: 380px;
`;
