import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import './Banner.css'

const Banner = () => {
  let history = useHistory();

    const handleLearnMore = () => {
        history.push('/services');
    }
    return (
        <div className="banner">
            <Button className="btn" variant={'contained'} color={'success'} onClick={handleLearnMore}>Start Learning
            </Button>
        </div>
        
    );
};

export default Banner;