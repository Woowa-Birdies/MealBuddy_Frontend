import React, { useState } from 'react';
import { DatePicker, TimePicker, Space } from 'antd';
import dayjs from 'dayjs';
import useRecruitStore from '@store/useRecruitStore';

const dateFormat = 'YYYY년 MM월 DD일';
const timeFormat = 'A hh:mm';

// localdatetime
function formatToLocalDateTime(dateTime) {
  const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간
  const date = new Date(dateTime);
  const localDateTime = new Date(date.getTime() + TIME_ZONE).toISOString();

  return localDateTime;
}

const CloseAtField = () => {
  const { recruitPost, setRecruitPost } = useRecruitStore();
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(dayjs());

  // 날짜 부분만 추출하여 meetAtDate 설정
  const meetAtDate = recruitPost?.meetAt ? dayjs(recruitPost.meetAt.split(' ')[0]) : null;

  const handleDateChange = (date) => {
    const combinedDateTime = dayjs(date).hour(selectedTime.hour()).minute(selectedTime.minute());
    setSelectedDate(date);
    if (selectedTime) {
      setRecruitPost({ ...recruitPost, closeAt: formatToLocalDateTime(combinedDateTime) });
    }
  };

  const handleTimeChange = (time) => {
    const combinedDateTime = selectedDate.hour(dayjs(time).hour()).minute(dayjs(time).minute());
    setSelectedTime(time);
    if (selectedDate) {
      setRecruitPost({ ...recruitPost, closeAt: formatToLocalDateTime(combinedDateTime) });
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
