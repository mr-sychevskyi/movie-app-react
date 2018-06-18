import React from 'react';

import {connect} from 'react-redux';

import {add} from './services/actions';
import FileLoaderView from './views/index';

const FileLoader = props => <FileLoaderView addMovie={props.add}/>;

const mapDispatchToProps = {add};

export default connect(null, mapDispatchToProps)(FileLoader);
