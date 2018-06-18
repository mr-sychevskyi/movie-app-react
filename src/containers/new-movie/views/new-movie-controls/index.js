import React from 'react';

import './style.styl';

import Button from '../../../../components/button-form/index';

const NewMovieControls = props => (
    <section className="new-movie-controls">
        <Button type="reset" view="secondary" action={props.onClose}/>
        <Button type="submit" view="primary"/>
    </section>
);

export default NewMovieControls;
