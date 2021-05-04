import React from 'react';
import styled from 'styled-components';
import { TiArrowSortedDown } from 'react-icons/ti';
import { FaRegTimesCircle } from 'react-icons/fa';

function SelectOptionContent({ color, size }) {
  return (
    <div>
      <BtnWrap>
        <SelectBtn>
          <Options selected="selected" disabled value="사이즈 선택">
            사이즈 선택
          </Options>
          {size?.map((size, idx) => {
            return (
              <Options key={idx} value={size}>
                {size}(267,000원)
              </Options>
            );
          })}
        </SelectBtn>
        <TiArrowSortedDown />
      </BtnWrap>

      <BtnWrap>
        <SelectBtn>
          <Options selected="selected" disabled value="색상 선택">
            색상 선택
          </Options>
          {color?.map((color, idx) => {
            return (
              <Options key={idx} value={color}>
                {color}(267,000원)
              </Options>
            );
          })}
        </SelectBtn>
        <TiArrowSortedDown />
      </BtnWrap>
      <CartItemWrap>
        <SelectedOptionsWrap>
          <SelectedBox>
            <SelectedOption>사이즈 선택: 208cm</SelectedOption>
            <SelectedOption>색상 선택 : 베이지</SelectedOption>
          </SelectedBox>
          <DeleteButton>
            <FaRegTimesCircle />
          </DeleteButton>
        </SelectedOptionsWrap>

        <TotalPriceWrap>
          <SelectCount type="number" />
          <TotalPrice>원</TotalPrice>
        </TotalPriceWrap>
      </CartItemWrap>
    </div>
  );
}

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.mainPink};
  border-radius: 4px;

  svg {
    color: ${({ theme }) => theme.mainPink};
  }
`;

const SelectBtn = styled.select`
  width: 100%;
  border-color: white;
  background-color: white;
  color: #424242;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const Options = styled.option``;

const CartItemWrap = styled.div`
  padding: 15px;
  background-color: rgb(245, 245, 245);
`;

const SelectedOptionsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectedBox = styled.div`
  margin-bottom: 15px;
`;

const DeleteButton = styled.span`
  color: #424242;
`;

const SelectedOption = styled.span`
  font-size: 15px;
  color: #424242;

  & + &::before {
    content: '/';
    margin: 0 5px;
  }
`;

const TotalPriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectCount = styled.input`
  width: 20%;
  border: 1px solid;
`;

const TotalPrice = styled.span``;

export default SelectOptionContent;
