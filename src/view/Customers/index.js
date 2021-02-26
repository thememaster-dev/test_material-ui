import React from 'react'
import {
    Typography,
    Modal,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Customers = () => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
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
            <Button variant="outlined" color="primary" onClick={handleOpen}>
                Open Modal
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >

                <div style={modalStyle} className={classes.paper}>
                    <h2>Text in a modal</h2>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                    <Button variant="outlined" color="primary" onClick={handleClose}>
                        close Modal
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default Customers
