import React, { useState } from 'react';
import { Input } from 'antd';

const PlaceField = () => {
  const [selectedPlace, setSelectedPlace] = useState('');

  const handleInputBlur = (e) => {
    setSelectedPlace(e.target.value);
  };

  const handleEnterPress = () => {
    console.log(selectedPlace);
  };

  return (
    <Input
      placeholder="장소를 입력하세요"
      style={{ width: '50%' }}
      value={selectedPlace}
      onBlur={handleInputBlur}
      onPressEnter={handleEnterPress}
    />
  );
};

export default PlaceField;
