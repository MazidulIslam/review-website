import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            {services.map = (service => <Service
                key={services.key}
                service={services}></Service>)}
        </div>
    );
};

export default Services;