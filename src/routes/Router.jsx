import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ROUTES from './routesModel';
import HomePage from '../pages/HomePage';
import LoginPage from '../users/pages/LoginPage';
import RegisterPage from '../users/pages/RegisterPage';
import MyAccountPage from '../users/pages/MyAccountPage';

export default function Router() {
  return (
    <Routes>
        <Route path={ROUTES.ROOT} element={<HomePage/>} />
        <Route path={ROUTES.LOGIN} element={<LoginPage/>} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage/>} />
        <Route path={ROUTES.MY_ACCOUNT} element={<MyAccountPage/>} />
    </Routes>
  )
}
