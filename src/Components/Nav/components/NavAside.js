import React from 'react';
import styled from 'styled-components';
import NavAsideIcon from './NavAsideIcon';

import { BiCart } from 'react-icons/bi';
import { BsBookmark, BsBell } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineDown } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { MdPhotoCamera } from 'react-icons/md';

const TEST = [BsBookmark, BsBell, BiCart, CgProfile];

function NavAside() {
  return (
    <NavMain>
      <div>
        <Form className="form">
          <input placeholder="스토어검색" type="text" required />
          <BiSearchs className="inputIcon" />
          <MdPhotoCameras className="inputIcon" />
        </Form>
      </div>
      {TEST.map((icon, idx) => {
        return <NavAsideIcon key={idx} Icon={icon} />;
      })}
      <div>
        <button className="writeBtn" type="button">
          글쓰기
          <AiOutlineDown className="AiOutlineDown" />
        </button>
      </div>
    </NavMain>
  );
}

const BiSearchs = styled(BiSearch)`
  position: absolute;
  left: 10px;
  bottom: 6px;
  width: 24px;
  height: 24px;
  color: #757575;
`;

const MdPhotoCameras = styled(MdPhotoCamera)`
  position: absolute;
  bottom: 6px;
  right: 10px;
  width: 24px;
  height: 24px;
  color: #757575;
`;

const NavMain = styled.div`
  display: flex;
  align-items: center;

  .form {
    position: relative;
    top: 10px;
    padding: 8px 9px 10px 39px;
    width: 258px;
    height: 40px;
    margin-right: 20px;
    line-height: 20px;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    background-color: #fff;
    color: #424242;

    input {
      outline: none;
      font-size: 15px;

      &::placeholder {
        color: gray;
      }
    }
  }

  .Nav-Aside {
    width: 24px;
    height: 24px;
    vertical-align: -25px;
    margin-right: 20px;
    color: #757575;
  }

  .writeBtn {
    padding: 10px 0 10px;
    width: 100px;
    height: 40px;
    line-height: 22px;
    vertical-align: -25px;
    border-radius: 3px;
    color: #ffffff;
    background-color: ${props => props.theme.mainPink};
    font-size: 16px;
    font-weight: bold;

    .AiOutlineDown {
      margin-left: 8px;
      vertical-align: -2px;
    }
  }
`;

const Form = styled.form`
  position: relative;
  top: 10px;
  padding: 8px 9px 10px 39px;
  width: 258px;
  height: 40px;
  margin-right: 20px;
  line-height: 20px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: #fff;
  color: #424242;

  input {
    outline: none;
    font-size: 15px;

    &::placeholder {
      color: gray;
    }
  }
`;

export default NavAside;
