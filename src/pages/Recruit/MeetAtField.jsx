import React, { useState } from 'react';
import { DatePicker, TimePicker, Space } from 'antd';
import dayjs from 'dayjs';

const dateFormat = 'YYYY년 MM월 DD일';
const timeFormat = 'A hh:mm';
const apiDateFormat = 'YYYY-MM-DD';

const MeetAtField = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedDate, setSelectedDate] = useState(dayjs());
  // eslint-disable-next-line no-unused-vars
  const [selectedTime, setSelectedTime] = useState(dayjs());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(dayjs(date).format(apiDateFormat));
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    console.log(dayjs(time).format(timeFormat));
  };

  // 오늘 이전의 날짜는 비활성화
  const disabledDate = (current) => {
    return current && current < dayjs().startOf('day');
  };

  const dateRender = (current) => {
    const date = current.date();
    return (
      <div className="ant-picker-cell-inner">
        <span>{date}</span>
      </div>
    );
  };

  return (
    <Space direction="horizontal" size={12}>
      <DatePicker
        format={dateFormat}
        onChange={handleDateChange}
        disabledDate={disabledDate}
        dateRender={dateRender}
      />
      <TimePicker format={timeFormat} onChange={handleTimeChange} minuteStep={5} showNow={false} />
    </Space>
  );
};

export default MeetAtField;
