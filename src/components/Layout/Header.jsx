import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import {Apps, List, Dashboard } from '@material-ui/icons';
import AddStocksDialog from '../Stocks/Dialog/AddStocks';
import { green, purple } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
        marginLeft: 20,
    },
    title: {
        flexGrow: 1,
    },
    appBar:{
        backgroundColor:'#af51b5'
    }
}));

const Header = (props) => {
    const classes = useStyles();
    
    return (
        <Fragment>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <Apps />
                        </IconButton>
                    </Typography>
                    <AddStocksDialog onAddStock={props.onAddStock}>Add</AddStocksDialog>
                    { props.dashboardView === 'list' ? 
                        <IconButton edge="start" color="inherit" className={classes.menuButton} onClick={props.onHandleDashboardView}>
                            <List />
                        </IconButton>
                        :
                        <IconButton edge="start" color="inherit" className={classes.menuButton} aria-label="menu" onClick={props.onHandleDashboardView}>
                            <Dashboard />
                        </IconButton>
                    }
                </Toolbar>
            </AppBar>
        </Fragment>
    );
}

export default Header