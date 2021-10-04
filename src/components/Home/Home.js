import { Grid } from '@mui/material';
import React, { createContext} from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

export const ServicesContext = createContext('');
const Home = () => {

    const serviceType = 'Our Services';
    
    
    return (
        <ServicesContext.Provider value={[serviceType]}>
            <div>
                <Banner></Banner>
                {/* <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>  */}
                        <Services></Services>
                    {/* </Grid>
                </Grid> */}
            </div>
        </ServicesContext.Provider>
        
    );
};

export default Home;