import React, { useState } from 'react';
import { useCurrentUser } from '../providers/UserProvider';
import { getUser, removeToken, setTokenInLocalStorage } from '../services/localStorageService';
import { googleLoginCallback, login, register } from '../services/usersApiService';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

export default function useUsers() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const { setUser, setToken } = useCurrentUser();
    const navigate = useNavigate();

    async function handleLogin(userData) {
        try {
            const token = await login(userData.email, userData.password);
            setTokenInLocalStorage(token);
            setToken(token);
            setUser(getUser());
            navigate(ROUTES.ROOT);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }

    async function handleGoogleLogin(response) {
        try {
            const token = await googleLoginCallback(response);
            setTokenInLocalStorage(token);
            setToken(token);
            setUser(getUser());
            navigate(ROUTES.ROOT);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }

    async function handleRegister(userData) {
        try {
            await register(userData);
            await handleLogin(userData);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }

    async function handleLogout() {
        removeToken();
        setUser(null);
        setToken(null);
    }

    return { handleLogin, handleGoogleLogin, handleLogout, handleRegister, isLoading, error };
}
