
import './App.css';
import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr-CH';
import "react-datepicker/dist/react-datepicker.css";

import ButtonBar from './ButtonBar';
import { DommageDentaire } from './DommageDentaire';
import { InterruptionForm } from './InterruptionForm';


function App() {
  const [startDate, setStartDate] = useState();
  const [time, setTime] = useState();
  const [arretChecked, setArretChecked] = useState(false);
  registerLocale('fr', fr);
  return (
    <div className="App container">
      <h2 className='h2'>Déclaration d'accident</h2>
      <ButtonBar/>
      

        <label for="lieuInput" className="form-label" >Lieu</label>

          <input type="text" className="form-control" id="lieuInput" aria-describedby="emailHelp"
            placeholder='Ville, NPA ou lieu'/>


        <label className="form-label" htmlFor="dateAccident">Date</label>
        <DatePicker 
          id="dateAccident"
          className="form-control" 
          selected={startDate} 
          onChange={(date) => setStartDate(date)} 
          locale="fr"
          dateFormat='dd/MM/yyyy'
        />
 

      <label htmlFor="heureAccident">Heure</label>
      <DatePicker 
        id="heureAccident"
        selected={time} 
        onChange={(time) => setTime(time)} 
        showTimeSelect
        showTimeSelectOnly
        locale="fr"
        dateFormat='HH:mm'
      />

      <div class="form-check">
        <input className="form-check-input" type="checkbox" 
          id="gridCheck"
          checked={arretChecked}
          onChange={() => setArretChecked(!arretChecked)}/>

        <label className="form-check-label" for="gridCheck">
          Arrêt de travail
        </label>
      </div>
      {arretChecked &&
        <InterruptionForm/>
      }
      <DommageDentaire/>


      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Non professionnel
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Professionnel
        </label>
      </div>
    </div>
  );
}

export default App;
