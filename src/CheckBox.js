import { useState } from "react";

export function CheckBox(props) {

    const [checked, setChecked] = useState(false);
    return (
      <div>
          <div class="form-check">
          <input className="form-check-input" type="checkbox" 
            checked={props.checked}
            onChange={() => setChecked(!checked)} />

          <label className="form-check-label" for="gridCheck">
            {props.label}
          </label>
        </div>
        { checked && props.children}
      </div>
    );
}