import React from 'react';
import "./styles.css";

const InputField = ({label, type, name, id, value, onChange, required, placeHolder}) => {
  return (
    <div className="input-container" data-testid="input">
        <label htmlFor="input" className='label'>{label}</label>
        <br/>
        <input 
            className="input" 
            type={type}
            name={name}
            id={id} 
            autoComplete="off" 
            value={value}
            placeholder={placeHolder}
            required={required}
            onChange={onChange}/>
    </div>
  )
}

export default InputField