import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const { kakao } = window;

export default function KakaoMap({ mapPosition, address, companyData }) {
  const [kakaoMap, setKakaoMap] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(mapPosition.y, mapPosition.x),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    setKakaoMap(map);

    if (address !== '') {
      const marker = addMarker(
        map,
        new kakao.maps.LatLng(mapPosition.y, mapPosition.x)
      );
      infoText(map, address, marker, mapPosition);
    }
  }, []);

  const addMarker = (map, position) => {
    const marker = new kakao.maps.Marker({ position });
    marker.setMap(map);

    return marker;
  };

  useEffect(() => {
    if (kakaoMap && address !== '') {
      const moveLatLng = new kakao.maps.LatLng(mapPosition.y, mapPosition.x);
      kakaoMap.panTo(moveLatLng);
      const marker = addMarker(kakaoMap, moveLatLng);
      infoText(kakaoMap, address, marker, mapPosition);
    }
  }, [mapPosition]);

  const infoText = (map, address, marker, mapPosition) => {
    if (address !== '') {
      var iwContent = `<div style="padding:5px;">${address} <br>
    <a href="https://map.kakao.com/link/map/${address},${mapPosition.y},${mapPosition.x}" style="color:blue; font-size:0.8rem" target="_blank">큰지도보기</a>
    <a href="https://map.kakao.com/link/to/${address},${mapPosition.y},${mapPosition.x}" style="color:blue; font-size:0.8rem; margin-left:5px;" target="_blank">길찾기</a></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(mapPosition.y, mapPosition.x); //인포윈도우 표시 위치입니다

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent,
      });

      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(map, marker);
    }
  };

  // useEffect(() => {
  //   if (kakaoMap === null) {
  //     return;
  //   }

  //   const positions = companyData.map(pos => new kakao.maps.LatLng(...pos));

  //   setMarkers(markers => {
  //     // clear prev markers
  //     markers.forEach(marker => marker.setMap(null));

  //     // assign new markers
  //     return positions.map(
  //       position => new kakao.maps.Marker({ map: kakaoMap, position })
  //     );
  //   });

  //   if (positions.length > 0) {
  //     const bounds = positions.reduce(
  //       (bounds, latlng) => bounds.extend(latlng),
  //       new kakao.maps.LatLngBounds()
  //     );

  //     kakaoMap.setBounds(bounds);
  //   }
  // }, [kakaoMap, companyData]);

  return (
    <>
      <Map id="map" ref={mapRef} />
    </>
  );
}

const Map = styled.div`
  width: 70vw;
  height: 60vh;
`;
