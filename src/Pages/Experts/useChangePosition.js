import { useState, useEffect } from 'react';
const { daum, kakao } = window;

let width = 500;
let height = 600;
let theme = {
  bgColor: '#ffd1fa',
  searchBgColor: '#ffd1fa',
};

export default function useChangePosition({ initialPosition }) {
  const geocoder = new kakao.maps.services.Geocoder();
  const [mapPosition, setPosition] = useState(initialPosition);
  const [address, setAddress] = useState('');

  useEffect(() => {
    getLocation();
  }, []);

  const handleChangeAddress = () => {
    new daum.Postcode({
      width,
      height,
      theme,
      oncomplete: ({ address }) => geocoder.addressSearch(address, callback),
    }).open({
      popupName: 'postcodePopup',
      left: window.screen.width / 2 - width / 2,
      top: window.screen.height / 2 - height / 2,
    });
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const coord = new kakao.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          geocoder.coord2RegionCode(coord.getLng(), coord.getLat(), callback);
        },
        function (error) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    } else {
      console.log('GPS를 지원하지 않습니다');
      geocoder.coord2RegionCode(mapPosition.y, mapPosition.x, callback);
    }
  }

  const callback = function ([{ x, y, address_name }], status) {
    if (status === kakao.maps.services.Status.OK) {
      setPosition({ x, y });
      setAddress(address_name);
    }
  };

  return {
    mapPosition,
    address,
    handleChangeAddress,
  };
}
