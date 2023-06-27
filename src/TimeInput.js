import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr-CH';
import "react-datepicker/dist/react-datepicker.css";
import generateId from './utils/generateId';


export function TimeInput(props) {
    registerLocale('fr', fr);
    const id = generateId();
    return (
        <div>
            <label className="form-label" htmlFor="{id}">{props.label}</label>
            <DatePicker 
            id="{id}"
            className="form-control" 
            selected={props.time} 
            onChange={props.onChange}
            showTimeSelect
            showTimeSelectOnly
            locale="fr"
            dateFormat='HH:mm'
        />
        </div>
    );
}