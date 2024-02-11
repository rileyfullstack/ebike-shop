import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ROUTES from './routesModel'

const AppRouter = () => {
    return (
        <Router>
            <Route path={ROUTES.HOME} element={''}/>
        </Router>
    );
};

export default AppRouter;
