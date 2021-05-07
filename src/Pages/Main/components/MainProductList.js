import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsBookmark } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';

export default function MainProductList(props) {
  const { item, istotal } = props;

  return (
    <EachItem istotal={istotal}>
      <ItemSection>
        <ImageSection>
          <ImageProtect className="ProtectImg">
            <img src={item.thumbnail_image} alt="no img" />
          </ImageProtect>
          <BsBookmark className="itemBookMark" />
        </ImageSection>
        <ContentSection>
          <div className="wrapContent">
            <h1>
              <Manufacturer>{item.manufacturer}</Manufacturer>
              <ItemName className="ItemName">{item.name}</ItemName>
            </h1>
            <ItemPrice className="price">
              <span className="discount_rate">
                {parseInt(item.discount_rate * 100)}%
              </span>
              <span className="discounted_price">
                {Number(item.price * item.discount_rate).toLocaleString()}
              </span>
            </ItemPrice>
            <ItemReview>
              <p>
                <FaStars />
                <strong>{item.star_rating}</strong>
                리뷰 {item.review_number.toLocaleString()}
              </p>
            </ItemReview>
            <ItemBadge>
              {item.is_freedelivery && <ItemFreeShip>무료배송</ItemFreeShip>}
              {item.hot_deal === 1 && <ItemSpecial>특가</ItemSpecial>}
            </ItemBadge>
          </div>
        </ContentSection>
      </ItemSection>
    </EachItem>
  );
}

const EachItem = styled(Link)`
  margin-bottom: ${({ istotal }) => istotal && '20px'};
  &:hover img {
    transform: scale(1.1);
  }

  &:hover .ItemName {
    color: gray;
  }
`;

const ItemSection = styled.section`
  margin-right: 20px;
`;

const ImageProtect = styled.div`
  border-radius: 5px;
  height: 254px;
  overflow: hidden;
`;

const ImageSection = styled.div`
  position: relative;
  width: 274px;
  height: 254px;

  img {
    width: 274px;
    height: 254px;
    border-radius: 5px;
    transition: transform 0.3s ease;
  }

  .itemBookMark {
    position: absolute;
    bottom: 3px;
    right: 3px;
    width: 30px;
    height: 30px;
    color: gray;

    &:hover {
      color: ${props => props.theme.mainPink};
    }
  }
`;

const ContentSection = styled.div`
  margin: 6px 0 0 5px;
`;

const Manufacturer = styled.span`
  display: block;
  font-size: 11px;
  color: #757575;
`;

const ItemName = styled.span`
  color: #424242;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
`;

const ItemPrice = styled.span`
  display: block;
  color: black;
  font-size: 17px;
  line-height: 23px;
  font-weight: 700;

  .discount_rate {
    color: #f77;
    margin-right: 5px;
  }
`;

const FaStars = styled(FaStar)`
  width: 1.1.em;
  height: 1.1.em;
  margin-right: 1px;
  vertical-align: -2px;
  color: ${props => props.theme.mainPink};
`;

const ItemReview = styled.div`
  p {
    margin-top: 3px;
    color: #9e9e9e;
    line-height: 16px;
    font-size: 12px;
    font-weight: 700;

    strong {
      margin-right: 2px;
      color: #424242;
    }
  }
`;

const ItemBadge = styled.span`
  display: block;
  margin-top: 6px;
  font-weight: 600;
  height: 20px;
`;

const ItemFreeShip = styled.span`
  border-radius: 3px;
  padding: 2px;
  margin-right: 5px;
  background: #dbdbdb;
  color: gray;
  font-size: 12px;
`;

const ItemSpecial = styled(ItemFreeShip)`
  background: coral;
  color: white;
`;
