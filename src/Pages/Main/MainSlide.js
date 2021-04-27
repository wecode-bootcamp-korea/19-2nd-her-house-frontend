import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import SlideItem from './components/SlideItem';

export default function MainSlide({ slideData }) {
  return (
    <div>
      <WrapCarousel>
        <Carousel {...settings}>
          {slideData.map((item, idx) => (
            <SlideItem key={idx} item={item} />
          ))}
        </Carousel>
      </WrapCarousel>
    </div>
  );
}

const settings = {
  className: 'carousel',
  stopAutoPlayOnHover: false,
  interval: 8000,
  animation: 'slide',
  fullHeightHover: true,
  timeout: (400, 150, 150),
  navButtonsProps: {
    style: {
      backgroundColor: 'pink',
      color: 'black',
    },
  },
  indicatorIconButtonProps: {
    style: {
      marginTop: '-70px',
      marginRight: '10px',
      color: 'white', // 3
    },
  },
  activeIndicatorIconButtonProps: {
    style: {
      color: '#EB91E3',
    },
  },
};

const WrapCarousel = styled.div`
  .carousel {
    height: 380px;
  }
`;
