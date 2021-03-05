import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    Button,
    Card,
    CardContent,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 100,
        margin:20
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    },
}));

const Customers = () => {
    const classes = useStyles();
    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="standard-basic" label="Standard" />
                <TextField id="standard-basic" label="Standard" />
                <Button color="primary" variant="contained">Submit</Button>
            </form>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">benevolent </Typography>
                    <Typography className={classes.pos} color="textSecondary">adjective</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Customers
