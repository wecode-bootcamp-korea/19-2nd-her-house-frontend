import React from 'react';
import styled from 'styled-components';

export default function SignupInput({
  title,
  subTitle,
  guideText,
  onChange,
  name,
  value,
}) {
  return (
    <InputWrapper>
      <div>{title}</div>
      {subTitle && <div>{subTitle}</div>}
      <input
        placeholder={guideText}
        onChange={onChange}
        name={name}
        value={value}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  width: 100%;
  margin-top: 10px;

  > div {
    width: 25vw;
    max-width: 25vw;
    margin-bottom: 5px;
    padding: 5px;
    font-size: 0.8rem;

    &:first-child {
      font-weight: bold;
      font-size: 1rem;
    }

    &:nth-child(2) {
      color: ${props => props.theme.mainPink};
    }
  }

  input {
    width: 100%;
    padding: 5px;
    border: 1px solid gray;
  }
`;
