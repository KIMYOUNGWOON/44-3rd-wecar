import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  carData: any;
}

const Map: React.FC<MapProps> = ({ carData }) => {
  const [map, setMap] = useState<any | null>(null);
  const MarkAddress = carData ? carData.address.slice(6) : null;

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const kakaoMap = new window.kakao.maps.Map(container, options);

    // 주소를 좌표로 변환하여 지도에 마커로 표시
    if (MarkAddress) {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(MarkAddress, (result: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          const marker = new window.kakao.maps.Marker({ position: coords });
          marker.setMap(kakaoMap);
          kakaoMap.setCenter(coords);
        }
      });
    }

    setMap(kakaoMap);
  }, [MarkAddress]);

  return (
    <MapContainer>
      <KakaoMap id="map" />
    </MapContainer>
  );
};

const MapContainer = styled.div`
  width: 1200px;
  margin: 30px auto 60px;
`;

const KakaoMap = styled.div`
  height: 500px;
`;

export default Map;
