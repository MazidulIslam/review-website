import { Grid } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ServicesContext } from '../Home/Home';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const [serviceType] = useContext(ServicesContext);
    return (
        <div style={{width: '80%', margin: 'auto'}}>
            <h1 style={{color: 'green', padding: '10px'}}>{serviceType}</h1>

            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                    {
                    services.map(service => <Service
                        key={service.key}
                        service={service}></Service>)
                    }
                </Grid>
        
        </div>
    );
};

export default Services;