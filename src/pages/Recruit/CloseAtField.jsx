import React, { useState, useEffect } from 'react';
import { DatePicker, TimePicker, Space } from 'antd';
import dayjs from 'dayjs';
import useRecruitStore from '@store/useRecruitStore';

const dateFormat = 'YYYY년 MM월 DD일';
const timeFormat = 'A hh:mm';

function formatToLocalDateTime(dateTime) {
  const date = new Date(dateTime);
  const localDateTime = new Date(date.getTime()).toISOString();
  return localDateTime;
}

const CloseAtField = () => {
  const { recruitPost, setRecruitPost } = useRecruitStore();
  const [selectedDate, setSelectedDate] = useState(
    recruitPost.closeAt ? dayjs(recruitPost.closeAt) : dayjs(),
  );
  const [selectedTime, setSelectedTime] = useState(
    recruitPost.closeAt ? dayjs(recruitPost.closeAt) : dayjs(),
  );

  useEffect(() => {
    if (recruitPost.closeAt) {
      setSelectedDate(dayjs(recruitPost.closeAt));
      setSelectedTime(dayjs(recruitPost.closeAt));
    }
  }, [recruitPost.closeAt]);

  const handleDateChange = (date) => {
    if (date) {
      const combinedDateTime = dayjs(date).hour(selectedTime.hour()).minute(selectedTime.minute());
      setSelectedDate(combinedDateTime);
      setRecruitPost({ ...recruitPost, closeAt: formatToLocalDateTime(combinedDateTime.toDate()) });
    }
  };

  const handleTimeChange = (time) => {
    if (time) {
      const combinedDateTime = selectedDate.hour(dayjs(time).hour()).minute(dayjs(time).minute());
      setSelectedTime(combinedDateTime);
      setRecruitPost({ ...recruitPost, closeAt: formatToLocalDateTime(combinedDateTime.toDate()) });
    }
  };

  const disabledDate = (current) => {
    const isBeforeToday = current && current < dayjs().startOf('day');
    const meetAtDate = recruitPost.meetAt ? dayjs(recruitPost.meetAt) : null;
    const isAfterMeetAt = meetAtDate && current >= meetAtDate.startOf('day');
    return isBeforeToday || isAfterMeetAt;
  };

  return (
    <Space direction="horizontal" size={12}>
      <DatePicker
        format={dateFormat}
        value={selectedDate}
        onChange={handleDateChange}
        disabledDate={disabledDate}
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

export default CloseAtField;
