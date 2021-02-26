import React from 'react'
import {
    Typography,
    Modal,
    Button
} from '@material-ui/core';


const Customers = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Typography variant="h4" align="center">
                Modal Example
             </Typography>
            <Button color="primary" onClick={handleOpen}>
                Open Modal
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div>
                    <Button color="primary" onClick={handleClose}>
                        close Modal
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default Customers
