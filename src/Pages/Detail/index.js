import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DetailContent from './Components/InfoContent';
import { API_URL } from '../../config';
import ReviewContent from './Components/ReviewContent';
import DescriptionContent from './Components/DescriptionContent/DescriptionContent';
import DetailNavContent from './Components/DetailNavContent';

function Detail(props) {
  const [productInfo, setProductInfo] = useState([]);
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;

    async function getData() {
      const PRODUCTLIST_URL = `${API_URL}/store/${id}`;
      const REVIEW_URL = `${API_URL}/store/review/${id}`;
      try {
        const productInfo = await axios.get(PRODUCTLIST_URL);
        const reviewData = await axios.get(REVIEW_URL);
        setProductInfo(productInfo.data.product_info);
        setReviewData(reviewData.data.Review_lists);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <DetailWrap>
      <ContentsWrap>
        <DetailContent productInfo={productInfo} />
      </ContentsWrap>
      <DetailNavContent />
      <ControlWrap>
        <LeftContentsWrap>
          <DescriptionContent productInfo={productInfo} />
          <ReviewContent reviewData={reviewData} />
        </LeftContentsWrap>
        <RightContentsWrap></RightContentsWrap>
      </ControlWrap>
    </DetailWrap>
  );
}

const DetailWrap = styled.section`
  ${props => props.theme.flexCenter}
  flex-direction: column;
`;

const ContentsWrap = styled.div`
  min-width: 1136px;
`;

const ControlWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftContentsWrap = styled.div``;

const RightContentsWrap = styled.div`
  width: 365px;
`;

export default Detail;
