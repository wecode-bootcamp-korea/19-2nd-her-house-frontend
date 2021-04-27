import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Category from './components/Category';
import NavAside from './components/NavAside';
import NavMenuTab from './components/NavMenuTab';

function Nav(props) {
  const { categoryList } = props;
  const [categoryShow, setCategoryShow] = useState(false);
  const [currentId, setCurrentId] = useState(2);

  const handleCategoryOn = () => {
    setCategoryShow(true);
  };

  const handleCategoryOff = () => {
    setCategoryShow(false);
  };

  const handleMouseEnter = id => {
    handleCategoryOff();
    setCurrentId(id);
  };

  return (
    <div>
      <WrapNav>
        <HeadNav>
          <NavBar>
            <NavMain>
              <div>
                <Link to="/">
                  <MainLogo alt="오늘의 집" src="/images/logo.png" />
                </Link>
              </div>
              {CATEGORY_ARR.map((category, idx) => {
                return (
                  <NavMainContent key={idx}>
                    <Link
                      className="mainContent-menu"
                      to="/"
                      onMouseEnter={() => handleMouseEnter(idx + 1)}
                    >
                      {category}
                    </Link>
                  </NavMainContent>
                );
              })}
            </NavMain>
            <NavAside />
          </NavBar>
        </HeadNav>
        <NavMenuTab
          currentId={currentId}
          handleCategoryOn={handleCategoryOn}
          handleCategoryOff={handleCategoryOff}
        />
        {categoryShow && (
          <Category
            categoryShow={categoryShow}
            handleCategoryOff={handleCategoryOff}
            categoryList={categoryList}
          />
        )}
      </WrapNav>
    </div>
  );
}

// const tabMapper = {
//   1: <CommunityTab />,
//   2: <StoreTab />,
//   3: <SigongTab />,
// };

const WrapNav = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #dbdbdb;

  .WrapStoreCategory {
    position: absolute;
    top: 138px;
    z-index: 99;
  }
`;

const HeadNav = styled.header`
  border-bottom: 1px solid #dbdbdb;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin: 0 7%;
  padding: 10px 40px;
`;

const NavMain = styled.div`
  display: flex;
  align-items: center;
  }
`;

const NavMainContent = styled.div`
  margin-right: 30px;

  .mainContent-menu {
    position: relative;
    top: 5px;
    padding: auto 6px;
    color: #424242;
    font-size: 18px;
    font-weight: 700;

    cursor: pointer;

    &:hover {
      color: ${props => props.theme.mainPink};
    }
  }
`;

const MainLogo = styled.img`
  width: 150px;
  height: 45px;
  margin-right: 30px;
`;

export default Nav;

const CATEGORY_ARR = ['커뮤니티', '스토어', '인테리어시공'];
