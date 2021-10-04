import { Button } from '@mui/material';
import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound">
            <h1>Page Not Found</h1>
            <Button variant="contained" href="/" color="error">
                Go Back
            </Button>
        </div>
    );
};

export default NotFound;