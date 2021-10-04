import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const Service = (props) => {
    const { title, thumb, by, rating, totalRatings, price, key } = props.service;
    let history = useHistory();
    const handleButton = () => {
        history.push(`/service/${key}`);
    }
    
    return (
        
            <Grid item xs={2} sm={4} md={4}>
                <Card sx={{ maxWidth: 345}}>
                    <CardMedia
                        component="img"
                        height="150"
                        image={thumb}
                        alt="thumbnail"
                    />
                    <CardContent>
                        <Typography style={{height: '100px', color: 'green'}} gutterBottom variant="h6" component="div">
                        {title}
                        </Typography>
                    <Typography variant="body2" color="text.secondary">
                        BY: {by}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Rating: {rating} ({totalRatings})
                    </Typography>
                    <Typography component="div" variant="h6">
                        Price: ${price}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleButton} variant="outlined" color="error" size="small">Enroll Now</Button>
                        <Button onClick={handleButton} variant="outlined" color="success" size="small">See More</Button>
                    </CardActions>
                </Card>
            </Grid>
    );
};

export default Service;