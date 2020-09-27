import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DailySchedule from './DailySchedule';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function Calendar() {
  const [date, selectDate] = useState(null);
  const history = useHistory();

  function dbDate(data) {
    if (data !== null) {
      const year = data.getFullYear();
      const month = data.getMonth() + 1;
      const day = data.getDate();
      const newDate = '';
      return newDate.concat(year, month, day);
    }
  }

  function handleDayClick(day, modifiers = {}) {
    if (modifiers.disabled) {
      return;
    }
    selectDate(modifiers.selected ? undefined : day);
    const dbDay = dbDate(day);
    history.push(`/${dbDay}`);
  }

  return (
    <div>
      <DayPicker
        selectedDays={date}
        onDayClick={handleDayClick}
        disabledDays={[{ daysOfWeek: [0, 6] }, { before: new Date() }]}
      />
      <DailySchedule date={date} />
    </div>
  );
}
