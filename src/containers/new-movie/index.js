import React, {Component} from 'react';

import {connect} from 'react-redux';

import {add} from './services/actions';

import './views/style.styl';
import NewMovieView from './views';

class NewMovie extends Component {
    state = {
        title: '',
        releaseYear: '',
        format: '',
        stars: ''
    };

    handleTextChange = e => {
        if (e) {
            const {name, value} = e.target;

            this.setState({
                title: name === 'Title' ? value : this.state.title,
                releaseYear: name === 'Release year' ? value : this.state.releaseYear,
                format: name === 'Format' ? value : this.state.format,
                stars: name === 'Stars' ? value : this.state.stars
            });
        }
    };

    handleSubmit = e => {
        if (e) {
            e.preventDefault();
            this.props.add(this.state);
            this.props.onClose();
        }
    };

    render() {
        return (
            <NewMovieView
                onClose={this.props.onClose}
                onSubmit={this.handleSubmit}
                handleTextChange={this.handleTextChange}
                formatValue={this.state.format}
            />
        );
    }
}

const mapDispatchToProps = {add};

export default connect(null, mapDispatchToProps)(NewMovie);
