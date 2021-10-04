import { Button } from '@mui/material';
import React from 'react';

const Contact = () => {
    return (
        <div style={{width: '80%', margin:'auto'}}>
            <div style={{height: '80vh',fontSize: '25px', paddingTop: '100px'}}>
                <p><strong>Address:</strong> house 32/A, Jigatola, Dhanmondi, Dhaka</p>
                <p><strong>Email:</strong> contact@eLearning.com</p>
                <p><strong>Phone:</strong> +880 1232 346598</p>
                <textarea style={{ width: '40%', height: '100px' }} placeholder="send message"></textarea><br/>
                <Button variant={'contained'} color={'success'}>Send</Button>


            </div>
        </div>
    );
};

export default Contact;