export function TextInput(props) {

    return (
        <div>
            <label for={props.formId} className="form-label" >{props.label}</label>

            <input 
                type="text" 
                className="form-control" 
                id={props.formId}  
                onChange={props.onChange}
                value={props.lieu}
                placeholder={props.placeholder}/>
        </div>
    );
}