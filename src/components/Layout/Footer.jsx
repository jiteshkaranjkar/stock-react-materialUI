import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';
import Markets from '../../data/stocksMarket';

const useStyles = makeStyles({
    root: {
        position:'absolute',
        bottom:0,
        width:'100%'
    },
  paper: {
    padding: 10,
    marginTop: 10, 
    marginBottom: 10
  },
  tab:{
      fontSize:'bold',
  }
});
const Footer = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
            <Tabs key={props.market} 
                value={props.market}
                indicatorColor="secondary"
                textColor="primary"
                onChange={props.onMarketChange}
                centered
                aria-label="scrollable prevent tabs example"
            >
                <Tab className={classes.tab} label="All" />
                {Markets.map(market => 
                <Tab 
                key={market} className={classes.tab} label={market} variant="h3"/>
                )}
            </Tabs>
        </Paper>
        </div>
    );
}

export default Footer