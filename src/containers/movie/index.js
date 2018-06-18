import React from 'react';

import {connect} from 'react-redux';

import {removeMovie} from './services/actions';
import MovieView from './views/index';

const Movie = props => <MovieView removeMovie={props.removeMovie} {...props}/>;

const mapDispatchToProps = {removeMovie};

export default connect(null, mapDispatchToProps)(Movie);

