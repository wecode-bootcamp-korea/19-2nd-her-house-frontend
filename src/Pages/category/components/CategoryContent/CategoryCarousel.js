import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { CAROUSEL_DATA } from './mockData';

export default function CategoryCarousel() {
  return (
    <CarouselWrap>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showStatus={false}
      >
        {CAROUSEL_DATA.map((item, index) => {
          const { url } = item;
          return (
            <CarouselImgBox key={index}>
              <img src={url} alt="배너 화면" />
            </CarouselImgBox>
          );
        })}
      </Carousel>
    </CarouselWrap>
  );
}

const CarouselWrap = styled.div`
  width: 100%;
`;

const CarouselImgBox = styled.div`
  height: 100%;

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
`;
