import { css } from 'styled-components';

const theme = {
  mainPink: '#eb91e3',

  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexSpaceBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexStart: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,

  flexJustifyCenter: css`
    display: flex;
    justify-content: center;
  `,
};

export default theme;
