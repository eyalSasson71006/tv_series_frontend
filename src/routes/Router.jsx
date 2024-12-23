import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ROUTES from './routesModel';
import HomePage from '../pages/HomePage';
import LoginPage from '../users/pages/LoginPage';
import RegisterPage from '../users/pages/RegisterPage';

export default function Router() {
  return (
    <Routes>
        <Route path={ROUTES.ROOT} element={<HomePage/>} />
        <Route path={ROUTES.LOGIN} element={<LoginPage/>} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage/>} />
    </Routes>
  )
}
