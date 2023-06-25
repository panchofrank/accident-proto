import React, { useState } from "react";
import DatePicker from 'react-datepicker';
export function InterruptionForm() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
  return(
    <div>
        <label className="form-label" htmlFor="dateAccident">Date de début</label>
        <DatePicker 
          id="dateAccident"
          className="form-control" 
          selected={startDate} 
          onChange={(date) => setStartDate(date)} 
          locale="fr"
          dateFormat='dd/MM/yyyy'
        />

<label className="form-label" htmlFor="dateAccident">Date de fin</label>
        <DatePicker 
          id="dateAccident"
          className="form-control" 
          selected={endDate} 
          onChange={(date) => setEndDate(date)} 
          locale="fr"
          dateFormat='dd/MM/yyyy'
        />

    </div>
  );
}