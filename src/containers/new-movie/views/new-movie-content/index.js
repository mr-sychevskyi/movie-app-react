import React from 'react';

import './style.styl';

import InputGroup from '../../../../components/input-group/';
import SelectGroup from '../../../../components/select-group';

const NewMovieContent = props => (
    <section className="new-movie-content">
        <InputGroup type="text" id="title" name="Title" placeholder="Movie title"
            action={props.handleTextChange} required={true}
        />
        <InputGroup type="number" id="releaseYear" name="Release year" placeholder="Release year"
            action={props.handleTextChange} min="1900" max="2018" required={true}
        />
        <SelectGroup value={props.formatValue} action={props.handleTextChange}/>

        <div className="form-group form-group-border-top">
            <textarea className="form-group__textarea" name="Stars" placeholder="Stars" rows="3"
                onChange={props.handleTextChange}
            />
        </div>
    </section>
);

export default NewMovieContent;
