import { Button } from '@mui/material';
import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound">
            <Button variant="contained" href="/" color="error">
                Go Back
            </Button>
        </div>
    );
};

export default NotFound;