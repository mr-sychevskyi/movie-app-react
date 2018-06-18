import React from 'react';

import './style.styl';

import ButtonIcon from '../../../components/button-icon';

const FileLoaderView = props => {

    const onInputChange = e => {
        e.preventDefault();

        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                const text = reader.result.split(/\n+\s/);

                text.map(movie => {
                    const movieSplitted = movie.split(/\n+/);

                    const assign = key =>
                        movieSplitted.filter(item => item.startsWith(key)).join().substr(key.length);

                    return movie.length && props.addMovie({
                        title: assign('Title: '),
                        releaseYear: assign('Release Year: '),
                        format: assign('Format: '),
                        stars: assign('Stars: ')
                    });
                });
            };

            reader.readAsText(file);
        } else {
            console.log('File not supported!'); // eslint-disable-line no-console
        }
    };

    return (
        <div className="movies-attach-file">
            <label htmlFor="file">
                <ButtonIcon class="btn-file" type="attach_file" text="Choose a file"/>
            </label>
            <input className="movies-file" id="file" type="file" name="Movies File"
                onChange={onInputChange}
            />
        </div>
    );
};

export default FileLoaderView;
