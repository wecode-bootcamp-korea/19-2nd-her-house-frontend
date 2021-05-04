import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

function WriterContent({ user }) {
  return (
    <WriterContentWrap>
      <UserImg>
        <img
          src="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-default_images-avatar.png/80/80"
          alt="사용자 이미지"
        />
      </UserImg>

      <WriterInfoWrap>
        <WriterName>{user}</WriterName>
        <WriterScore>
          <StarScore>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </StarScore>
          <DateInfo>2020.08.24 ・ 오늘의집 구매</DateInfo>
        </WriterScore>
      </WriterInfoWrap>
    </WriterContentWrap>
  );
}

const WriterContentWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const UserImg = styled.div`
  img {
    margin: 4px 8px 0 0;
    width: 24px;
    height: 24px;
  }
`;

const WriterInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const WriterName = styled.span`
  color: #424242;
  font-size: 14px;
`;

const WriterScore = styled(WriterName)`
  display: flex;
  align-items: center;
  margin-top: 2px;
`;

const StarScore = styled.span`
  margin-right: 5px;
  color: ${({ theme }) => theme.mainPink};
  svg {
    font-size: 17px;
  }
`;

const DateInfo = styled.span``;

export default WriterContent;
