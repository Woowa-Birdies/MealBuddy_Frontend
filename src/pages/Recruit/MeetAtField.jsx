import React, { useState } from 'react';
import { DatePicker, TimePicker, Space } from 'antd';
import dayjs from 'dayjs';
import useRecruitStore from '@store/useRecruitStore';

const dateFormat = 'YYYY년 MM월 DD일';
const timeFormat = 'A hh:mm';

// localdatetime
function formatToLocalDateTime(dateTime) {
  // dayjs 객체를 ISO 8601 형식으로 변환
  const isoDateTime = dayjs(dateTime).toISOString();

  // ISO 문자열에서 밀리초('.000Z') 부분을 찾아 '.000000'으로 대체
  const formattedDateTime = isoDateTime.replace('.000Z', '.000000');

  return formattedDateTime;
}

// function formatToLocalDateTime(dateTime) {
//   const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간
//   const date = new Date(dateTime);
//   const localDateTime = new Date(date.getTime() + TIME_ZONE).toISOString();

//   return localDateTime;
// }

const MeetAtField = () => {
  const { recruitPost, setRecruitPost } = useRecruitStore();
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(dayjs());

  const handleDateChange = (date) => {
    const combinedDateTime = dayjs(date).hour(selectedTime.hour()).minute(selectedTime.minute());
    setSelectedDate(combinedDateTime);
    if (selectedTime) {
      setRecruitPost({ ...recruitPost, meetAt: formatToLocalDateTime(combinedDateTime) });
    }
  };

  const handleTimeChange = (time) => {
    const combinedDateTime = selectedDate.hour(dayjs(time).hour()).minute(dayjs(time).minute());
    setSelectedTime(combinedDateTime);
    if (selectedDate) {
      setRecruitPost({ ...recruitPost, meetAt: formatToLocalDateTime(combinedDateTime) });
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
