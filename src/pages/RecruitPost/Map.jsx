import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useRecruitStore from '@store/useRecruitStore';

const Map = () => {
  const mapContainer = useRef(null); // 지도를 담을 컨테이너 ref
  const { recruitPost } = useRecruitStore();
  const placeName = recruitPost.place;

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567), // 기본 중심 좌표
        level: 3, // 지도의 확대 레벨
      };

      // 지도 생성
      const map = new window.kakao.maps.Map(mapContainer.current, mapOption);

      // 장소 검색 객체를 생성
      const ps = new window.kakao.maps.services.Places();

      // 장소 검색을 실행
      ps.keywordSearch(placeName, (data, status, _pagination) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(data[0].y, data[0].x);

          // 결과 위치로 지도 중심을 이동
          map.setCenter(coords);

          // 결과 위치에 마커를 생성하고 지도에 표시
          // eslint-disable-next-line no-unused-vars
          const marker = new window.kakao.maps.Marker({
            map,
            position: coords,
          });
        }
      });
    }
  }, [placeName]);

  return <Container ref={mapContainer} />;
};

export default Map;

const Container = styled.div`
  width: 756px;
  height: 426px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #f8f8f8;
`;
