import React from 'react'
import {
    Typography,
} from '@material-ui/core';
import ModalComp from './ModalComp';

const handleOpen = () => {
    alert("ttgh")

}

const Customers = () => {
    // const classes = useStyles();
    return (
        <>
            <Typography variant="h4" align="center">
                Modal Example
             </Typography>
            <button onClick={handleOpen}>open</button>
            <ModalComp/>
        </>
    )
}

export default Customers
