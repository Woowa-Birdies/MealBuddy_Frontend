import React, { useState, useEffect } from 'react';
import { DatePicker, TimePicker, Space } from 'antd';
import dayjs from 'dayjs';
import useRecruitStore from '@store/useRecruitStore';

const dateFormat = 'YYYY년 MM월 DD일';
const timeFormat = 'A hh:mm';

// localdatetime
function formatToLocalDateTime(dateTime) {
  const date = new Date(dateTime);
  const localDateTime = new Date(date.getTime()).toISOString();
  return localDateTime;
}

const MeetAtField = () => {
  const { recruitPost, setRecruitPost } = useRecruitStore();
  const [selectedDate, setSelectedDate] = useState(
    recruitPost.meetAt ? dayjs(recruitPost.meetAt) : dayjs(),
  );
  const [selectedTime, setSelectedTime] = useState(
    recruitPost.meetAt ? dayjs(recruitPost.meetAt) : dayjs(),
  );

  useEffect(() => {
    if (recruitPost.meetAt) {
      setSelectedDate(dayjs(recruitPost.meetAt));
      setSelectedTime(dayjs(recruitPost.meetAt));
    }
  }, [recruitPost.meetAt]);

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
        value={selectedDate}
        onChange={handleDateChange}
        disabledDate={disabledDate}
        // dateRender={dateRender}
      />
      <TimePicker
        format={timeFormat}
        value={selectedTime}
        onChange={handleTimeChange}
        use12Hours
        minuteStep={5}
      />
    </Space>
  );
};

export default MeetAtField;
