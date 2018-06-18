import React from 'react';

import './style.styl';

const InputGroup = props => (
    <div className="form-group">
        <label className="form-group__label" htmlFor={props.id}>{props.name}</label>
        <input className="form-group__input"
            id={props.id}
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.action}
            required={props.required}
            min={props.min}
            max={props.max}
        />
    </div>
);

export default InputGroup;
