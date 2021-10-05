import { Grid } from '@mui/material';
import React, { createContext} from 'react';
import Banner from '../Banner/Banner';
import Instructors from '../Instructors/Instructors';
import Services from '../Services/Services';

export const ServicesContext = createContext('');
const Home = () => {

    const serviceType = 'Our Services';
    const instructor = 'Our Instructors';
    
    
    return (
        <ServicesContext.Provider value={[serviceType, instructor]}>
            <div>
                <Banner></Banner>
                <Services></Services>
                <Instructors></Instructors>
            </div>
        </ServicesContext.Provider>
        
    );
};

export default Home;