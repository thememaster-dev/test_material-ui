import React from 'react'
import NavBar from '../../containers/NavBar'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));
const DashBoard = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavBar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <div>hi</div>
            </main>
        </div>
    )
}

export default DashBoard;
