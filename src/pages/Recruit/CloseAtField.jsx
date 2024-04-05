import React, { useState } from 'react';
import { DatePicker, TimePicker, Space } from 'antd';
import dayjs from 'dayjs';
import useRecruitStore from '@store/useRecruitStore';

const dateFormat = 'YYYY년 MM월 DD일';
const dateStoreFormat = 'YYYY-MM-DD';
const timeFormat = 'A hh:mm';

const CloseAtField = () => {
  const { recruitPost, setRecruitPost } = useRecruitStore();

  // 날짜 부분만 추출하여 meetAtDate 설정
  const meetAtDate = recruitPost?.meetAt ? dayjs(recruitPost.meetAt.split(' ')[0]) : null;

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(dayjs());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (selectedTime) {
      const formattedDate = date.format(dateStoreFormat);
      const formattedTime = selectedTime.format(timeFormat);
      setRecruitPost({ ...recruitPost, closeAt: `${formattedDate} ${formattedTime}` });
    }
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    if (selectedDate) {
      const formattedDate = selectedDate.format(dateStoreFormat);
      const formattedTime = time.format(timeFormat);
      setRecruitPost({ ...recruitPost, closeAt: `${formattedDate} ${formattedTime}` });
    }
  };

  // meetAtDate가 있으면 그 날짜 이후와 오늘 날짜 이전을 선택할 수 없도록 설정
  const disabledDate = (current) => {
    // 오늘 날짜 이전은 선택 불가
    const isBeforeToday = current && current < dayjs().startOf('day');
    // meetAtDate가 설정되어 있으면, 해당 날짜 이후도 선택 불가
    const isAfterMeetAt = meetAtDate && current > meetAtDate.startOf('day');

    return isBeforeToday || isAfterMeetAt;
  };

  return (
    <Space direction="horizontal" size={12}>
      <DatePicker format={dateFormat} onChange={handleDateChange} disabledDate={disabledDate} />
      <TimePicker format={timeFormat} onChange={handleTimeChange} minuteStep={5} showNow={false} />
    </Space>
  );
};

export default CloseAtField;
