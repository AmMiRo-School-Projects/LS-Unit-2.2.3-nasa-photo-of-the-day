import React, { useState } from "react";
import DatePicker from "react-datepicker";

function DatePick() {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  return (
    <DatePicker
      dateFormat="yyyy/MM/dd"
      selected={startDate}
      onChange={date => setStartDate(date)}
    />
  );
}

export default DatePick;
