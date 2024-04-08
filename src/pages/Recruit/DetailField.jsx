import React, { useState } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const DetailField = () => {
  const [selectedDetail, setSelectedDetail] = useState('');

  const handleDetailChange = (e) => {
    setSelectedDetail(e.target.value);
  };

  const handleInputBlur = () => {
    console.log(selectedDetail);
  };

  return (
    <TextArea
      placeholder="내용을 입력하세요"
      value={selectedDetail}
      onChange={handleDetailChange}
      onBlur={handleInputBlur}
      autoSize={{ minRows: 10 }}
    />
  );
};

export default DetailField;
