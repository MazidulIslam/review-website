import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footer = {
        backgroundColor: 'azure',
        padding: '20px'
    }
    return (
        <div style={footer}>
            <p>Copyright 2021- <Link to="/">eLearning</Link></p>
        </div>
    );
};

export default Footer;