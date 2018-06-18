import React from 'react';
import './style.styl';

import ButtonIcon from '../../../../components/button-icon';

const NewMovieHeader = props => (
    <section className="new-movie-header">
        <h3 className="new-movie-title">New movie</h3>
        <ButtonIcon type="close" class="btn-close" action={props.onClose}/>
    </section>
);

export default NewMovieHeader;
