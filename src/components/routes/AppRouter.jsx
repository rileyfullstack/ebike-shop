import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ROUTES from './routesModel'
import BikePostPage from '../bikePost/BikePostPage';

const AppRouter = () => {
    return (
            <Routes>
                <Route path={ROUTES.HOME} element={<BikePostPage/>} />
            </Routes>
    );
};

export default AppRouter;
