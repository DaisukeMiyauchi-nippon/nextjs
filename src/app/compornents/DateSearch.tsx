"use client"
import React, { useState } from 'react';
import moment from 'moment'; // Date parsing and formatting library

const DateSearch = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  return (
    <div className='mt-2'>
    <form>
      <label htmlFor="startDate"></label>
      <input
        type="date"
        id="startDate"
        value={startDate ? moment(startDate).format('YYYY-MM-DD') : ''}
      />
      から
      <label htmlFor="endDate"></label>
      <input
        type="date"
        id="endDate"
        value={endDate ? moment(endDate).format('YYYY-MM-DD') : ''}
      />
      まで
      <button type="submit">検索</button>
    </form>
    </div>
  );
};

export default DateSearch;