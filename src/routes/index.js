import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import MoviesList from '../containers/movies-list';
import PageNotFound from '../components/page-not-found/index';

const AllRoutes = () => (
    <Switch>
        <Route exact={true} path="/" render={() => <Redirect to="/movies"/>}/>
        <Route path="/movies" component={MoviesList}/>
        <Route component={PageNotFound}/>
    </Switch>
);

export default AllRoutes;
