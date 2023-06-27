
import React, { useState } from "react";

import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr-CH';

import isBefore from 'date-fns/isBefore';

import ButtonBar from './ButtonBar';
import { OtherEmployers } from "./OtherEmployers";
import { CheckBox } from './CheckBox';
import { InterruptionForm } from './InterruptionForm';
import { TextInput } from "./TextInput";
import { DateInput } from "./DateInput";
import { TimeInput } from "./TimeInput";

function hasDateError(startDate, endDate) {
  if (startDate && endDate) {

    return isBefore(endDate, startDate);
  }
  return false;
}



function App() {
  const [accidentDate, setAccidentDate] = useState();
  const [time, setTime] = useState();
  const [lieu, setLieu] = useState();
  const [arretChecked, setArretChecked] = useState(false);
  const [interruptionStartDate, setInterruptionStartDate] = useState();
  const [interruptionEndDate, setInterruptionEndDate] = useState();

  const isValid = function() {
    if (!lieu) {
      return false;
    }
    if (arretChecked) {
      
      return interruptionStartDate && interruptionEndDate && !hasDateError(interruptionStartDate, interruptionEndDate);
    }
    return true;
  }

  registerLocale('fr', fr);
  return (
    <div className="App container">
      <h2 className='h2'>je déclare un accident</h2>
      <ButtonBar showSend={isValid()}/>
      

      <TextInput 
        label="Lieu"
        placeholder='Ville, NPA ou lieu'
        onChange={(event) => setLieu(event.target.value)}
        formId='lieu'
        />

      <DateInput 
        label="Date de l'accident"
        date={accidentDate}
        onChange={(date) => setAccidentDate(date)} />

      <TimeInput
        label="Heure"
        time={time} 
        onChange={(time) => setTime(time)} 
    
      />

      <CheckBox label="Arrêt de travail">
        <div>
          <DateInput 
              label="Date de début"
              onChange={setInterruptionStartDate}
              date={interruptionStartDate} 
          />
          <DateInput 
              label="Date de fin"
              onChange={setInterruptionEndDate}
              date={interruptionEndDate} 
          />

        {hasDateError(interruptionStartDate, interruptionEndDate) &&
          <div className="text-danger">
              La date de fin doit être après la date début
            </div>
        }
      </div>
      </CheckBox>

        

      <CheckBox label="Dommage dentaire"/>
      <CheckBox label="Maladie professionnelle"/>

      <label className="form-check-label" htmlFor="flexRadioDefault1">
          Type de l'accident
        </label>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Non professionnel
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Professionnel
        </label>
      </div>

      <OtherEmployers/>
      <CheckBox label="Absence au moment de l'accident"/>

      Rapport de police
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="police1"></input>
        <label className="form-check-label" htmlFor="police1">
          Oui
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="police2"></input>
        <label className="form-check-label" htmlFor="police2">
          Non
        </label>
      </div>
    
      <p>Description de l'accident, Blessures, rapport de police, équipements de travail (à conditionner), Médecin premiers soins,
        médecin suite, personnes impliquées / témoins de l'accident (textarea)
      </p>
    </div>
  );
}

export default App;
