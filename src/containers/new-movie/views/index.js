import React from 'react';

import './style.styl';

import NewMovieHeader from './new-movie-header';
import NewMovieContent from './new-movie-content';
import NewMovieControls from './new-movie-controls';

const NewMovieView = props => (
    <form className="new-movie" onSubmit={props.onSubmit}>
        <NewMovieHeader onClose={props.onClose}/>
        <NewMovieContent handleTextChange={props.handleTextChange} formatValue={props.formatValue}/>
        <NewMovieControls onClose={props.onClose}/>
    </form>
);

export default NewMovieView;
