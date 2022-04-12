import { Link, Typography } from '@mui/material';
import React from 'react'

export default function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href={undefined}>
                demo UI
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}