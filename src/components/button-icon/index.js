import React from 'react';

const ButtonIcon = props => (
    <a className={`btn ${props.class}`} onClick={props.action}>
        {props.text && <span>{props.text}</span>}
        <i className="material-icons">{props.type}</i>
    </a>
);

export default ButtonIcon;
