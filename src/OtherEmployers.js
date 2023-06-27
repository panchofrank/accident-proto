import { useState } from "react";
import { CheckBox } from "./CheckBox";
export function OtherEmployers() {
    const [checked, setChecked] = useState(false);
    return (
        <div>
            <CheckBox label="Autres employeurs" 
            checked={checked}
            handleChecked={() => setChecked(!checked) }
            />
                    {checked &&
         <div>
                    <label for="lieuInput" className="form-label" >Entreprises et nombres d'heures par semaine</label>

                    <input 
                    type="text" 
                    className="form-control" 
                    id="lieuInput" 
                    required='true'
                    aria-describedby="emailHelp"          

                    placeholder=''/>

         </div>
        
        }
        </div>


    );
}