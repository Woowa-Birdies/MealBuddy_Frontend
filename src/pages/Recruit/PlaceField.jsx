import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import useRecruitStore from '@store/useRecruitStore';

const PlaceField = () => {
  const { recruitPost, setRecruitPost } = useRecruitStore();
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const city = '강릉';

  const searchPlaces = (value) => {
    if (!value.trim()) {
      setOptions([]);
      console.log('키워드를 입력해주세요!');
      return;
    }

    setOptions([]); // 이전 검색 결과를 초기화
    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(`${city} ${value}`, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        // 사용자가 입력한 텍스트를 포함하고, '식당' 또는 '카페' 카테고리에 속하는 장소만 필터링
        const newOptions = data
          .filter(
            (place) =>
              (place.category_group_code === 'FD6' || place.category_group_code === 'CE7') &&
              place.place_name.includes(value),
          )
          .slice(0, 6) // 최대 6개까지만 표시
          .map((place) => ({
            value: place.place_name,
            label: `${place.place_name} (${place.road_address_name || place.address_name})`,
          }));

        setOptions(newOptions);
      } else {
        console.log('검색 결과가 없거나 오류가 발생했습니다.');
      }
    });
  };

  const onSelect = (value) => {
    console.log(value);
    setInputValue(value); // 선택된 장소 이름으로 입력값 업데이트
    setRecruitPost({ ...recruitPost, place: value }); // 선택된 장소로 상태 업데이트
  };

  const handleSearch = (value) => {
    setInputValue(value); // 입력값 업데이트
    searchPlaces(value); // 검색 실행
  };

  return (
    <AutoComplete
      style={{ width: '100%' }}
      value={inputValue}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
      placeholder="장소를 입력하세요"
    />
  );
};

export default PlaceField;
