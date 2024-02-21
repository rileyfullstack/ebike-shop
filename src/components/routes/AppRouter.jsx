import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ROUTES from './routesModel'
import BikePostPage from '../bikePost/BikePostPage';
import BikePostPurchasePage from '../bikePost/BikePostPurchasePage';

const AppRouter = () => {
    return (
            <Routes>
                <Route path={ROUTES.HOME} element={<BikePostPage/>} />
                <Route path={`${ROUTES.BIKEPOST}/:id`} element={<BikePostPurchasePage/>} />
            </Routes>
    );
};

export default AppRouter;
