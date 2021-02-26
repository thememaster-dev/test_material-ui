import React from 'react'
import NavBar from '../../containers/NavBar'
import { makeStyles } from '@material-ui/core/styles';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Customers from '../Customers'
import CReport from '../CReport'
import Order from '../Order'

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
        <Router>
            <div className={classes.root}>
                <NavBar />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Switch>
                        <Route exact path="/" component={Customers} />
                        <Route exact path="/report" component={CReport} />
                        <Route exact path="/order" component={Order} />
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default DashBoard;
