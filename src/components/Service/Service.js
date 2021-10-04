import React from 'react';

const Service = (props) => {

    console.log(props);
    // const { } = props.service;
    return (
        <div>
            <h1>Single service</h1>
            <h3>{ props.service.title}</h3>
        </div>
    );
};

export default Service;