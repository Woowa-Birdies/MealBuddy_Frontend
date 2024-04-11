import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'antd';
import useRecruitStore from '@store/useRecruitStore';

const PlaceField = () => {
  const { recruitPost, setRecruitPost } = useRecruitStore();
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const city = '강릉';

  useEffect(() => {
    // 디바운싱을 위한 타이머 설정
    const timer = setTimeout(() => {
      if (inputValue.trim()) {
        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(`${city} ${inputValue}`, (data, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const newOptions = data
              .filter((place) => {
                if (recruitPost.foodTypeTag === '') {
                  return (
                    (place.category_group_code === 'CE7' || place.category_group_code === 'FD6') &&
                    place.place_name.includes(inputValue)
                  );
                }
                if (recruitPost.foodTypeTag === '카페') {
                  return (
                    place.category_group_code === 'CE7' && place.place_name.includes(inputValue)
                  );
                }
                return place.category_group_code === 'FD6' && place.place_name.includes(inputValue);
              })
              .slice(0, 6)
              .map((place) => ({
                value: place.place_name,
                label: `${place.place_name} ${place.road_address_name || place.address_name}`,
                address: place.road_address_name || place.address_name,
              }));

            setOptions(newOptions);
          } else {
            console.log('검색 결과가 없거나 오류가 발생했습니다.');
          }
        });
      } else {
        setOptions([]);
      }
    }, 500);

    // 컴포넌트 언마운트 또는 inputValue 변경 시 타이머 클린업
    return () => clearTimeout(timer);
  }, [inputValue, city, recruitPost.foodTypeTag]);

  const onSelect = (value, option) => {
    setInputValue(value);
    setRecruitPost({ ...recruitPost, place: value, address: option.address });
  };

  const handleSearch = (value) => {
    setInputValue(value);
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
