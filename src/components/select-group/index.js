import React from 'react';

import './style.styl';

const SelectGroup = props => (
    <div className="form-group">
        <label className="form-group__label" htmlFor="format">Format</label>
        <select className="form-group__select" id="format" name="Format" onChange={props.action}
            value={props.value} required={true}>
            <option value="" defaultValue={true} disabled={true}>Format</option>
            <option value="VHS">VHS</option>
            <option value="DVD">DVD</option>
            <option value="Blu-Ray">Blu-Ray</option>
        </select>
    </div>
);

export default SelectGroup;
