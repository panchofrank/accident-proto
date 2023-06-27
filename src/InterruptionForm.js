import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import { DateInput } from "./DateInput";
export function InterruptionForm(props) {
    
  return(
    <div>
        <DateInput 
            label="Date de début"
            onChange={props.onChangeStartDate}
            date={props.startDate} 
        />
<DateInput 
            label="Date de fin"
            onChange={props.onChangeEndDate}
            date={props.endDate} 
        />

    {props.dateError &&
    <div className="text-danger">
        La date de fin doit être après la date début
      </div>
}
    </div>
  );
}