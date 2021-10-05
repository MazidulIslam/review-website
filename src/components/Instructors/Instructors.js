import { Grid } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ServicesContext } from '../Home/Home';
import Instructor from '../Instroctor/Instructor';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('./instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, [])
    const [instructor, serviceType] = useContext(ServicesContext);
    return (
        <div style={{ width: '80%', margin: 'auto' }}>
            
            <h1 style={{color: 'green', padding: '10px'}}>{serviceType}</h1>

            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                {
                    instructors.map(instructor => <Instructor
                        key={instructor.id}
                        instroctor={instructor}></Instructor>)    
                }    
            </Grid>
        
        </div>
    );
};

export default Instructors;