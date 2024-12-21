import { Box, Typography } from '@mui/material';
import React from 'react'
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModel';

export default function LeftHeader() {
    const navigate = useNavigate();``
  return (
    <Box onClick={() => navigate(ROUTES.ROOT)} sx={{ display: "flex", alignItems: "center", gap:2, cursor: "pointer" }}>
        <Logo/>
        <Typography variant="h5">TV Series</Typography>
    </Box>
  )
}
