import React from 'react';

import './style.styl';

const Button = props => (
    <button className={props.view === 'primary' ? 'btn-form btn-primary' : 'btn-form btn-secondary'}
        type={props.type}
        onClick={props.action}>
        {props.view === 'primary' ? 'Add' : 'Cancel'}
    </button>
);

export default Button;
