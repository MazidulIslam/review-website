import { Card, CardContent, CardMedia, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

const Instructor = (props) => {
    const { fName, lName, email, gender, avatar} = props.instroctor;
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={avatar}
                    alt="green iguana"
                    />
                <CardContent>
                    <Typography style={{ height: '100px', color: 'green' }} gutterBottom variant="h5" component="div">
                        {fName} {lName}
                    </Typography>
                    
                    {/* list item  */}
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemText primary= {email}  />
                </ListItem>
                <ListItem>
                    <ListItemText primary={gender} />
                </ListItem>
                </List>
                {/* end list view */}
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Instructor;