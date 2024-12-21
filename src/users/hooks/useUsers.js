import React, { useState } from 'react';
import { useCurrentUser } from '../providers/UserProvider';
import { getUser, setTokenInLocalStorage } from '../services/localStorageService';
import { googleLoginCallback, login } from '../services/usersApiService';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

export default function useUsers() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const { setUser, setToken } = useCurrentUser();
    const navigate = useNavigate();

    function handleLogin(userData) {
        try {
            const token = login(userData.email, userData.password);
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

    return { handleLogin, handleGoogleLogin, isLoading, error };
}
