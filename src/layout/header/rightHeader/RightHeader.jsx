import { Box, Button } from '@mui/material';
import React from 'react'
import { useCurrentUser } from '../../../users/providers/UserProvider';
import Logged from './Logged';
import NotLogged from './NotLogged';

export default function RightHeader() {
    const {user} = useCurrentUser()
    return (
		<Box>
			{user && <Logged/>}
            {!user && <NotLogged/>}
		</Box>
  );
}
