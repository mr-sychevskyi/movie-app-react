import React, {Component} from 'react';

import './style.styl';

class GlobalSearchView extends Component {
    state = {
        value: '',
        filterData: []
    };

    onInputChange = e => {
        if (e) {
            const value = e.target.value;
            const {movies, filterMovies} = this.props;

            const filterData = movies.filter(movie => {
                const title = movie.title.toLowerCase();
                const stars = movie.stars.toLowerCase();

                return title.includes(value.toLowerCase()) || stars.includes(value.toLowerCase());
            });

            this.setState({
                value,
                filterData
            }, () => filterMovies(this.state.filterData));
        }
    };

    render() {
        return (
            <form className="global-search">
                <i className="global-search__icon material-icons">search</i>
                <input
                    className="global-search__input"
                    type="text"
                    placeholder="Search"
                    value={this.state.value}
                    onChange={this.onInputChange}
                />
            </form>
        );
    }
}

export default GlobalSearchView;
