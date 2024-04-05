import React, { useState } from 'react';
import { DatePicker, TimePicker, Space } from 'antd';
import dayjs from 'dayjs';
import useRecruitStore from '@store/useRecruitStore';

const dateFormat = 'YYYY년 MM월 DD일';
const dateStoreFormat = 'YYYY-MM-DD';
const timeFormat = 'A hh:mm';

const MeetAtField = () => {
  const { recruitPost, setRecruitPost } = useRecruitStore();
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(dayjs());

  const handleDateChange = (date) => {
    setSelectedDate(dayjs(date));
    if (selectedTime) {
      const formattedDate = date.format(dateStoreFormat);
      const formattedTime = selectedTime.format(timeFormat);
      setRecruitPost({ ...recruitPost, meetAt: `${formattedDate} ${formattedTime}` });
    }
  };

  const handleTimeChange = (time) => {
    setSelectedTime(dayjs(time));
    if (selectedDate) {
      const formattedDate = selectedDate.format(dateStoreFormat);
      const formattedTime = time.format(timeFormat);
      setRecruitPost({ ...recruitPost, meetAt: `${formattedDate} ${formattedTime}` });
    }
  };

  // 오늘 이전의 날짜는 비활성화
  const disabledDate = (current) => {
    return current && current < dayjs().startOf('day');
  };

  // const dateRender = (current) => {
  //   const date = current.date();
  //   return (
  //     <div className="ant-picker-cell-inner">
  //       <span>{date}</span>
  //     </div>
  //   );
  // };

  return (
    <Space direction="horizontal" size={12}>
      <DatePicker
        format={dateFormat}
        onChange={handleDateChange}
        disabledDate={disabledDate}
        // dateRender={dateRender}
      />
      <TimePicker format={timeFormat} onChange={handleTimeChange} use12Hours minuteStep={5} />
    </Space>
  );
};

export default MeetAtField;
