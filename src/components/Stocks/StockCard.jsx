import React, { Fragment } from 'react';
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardHeader, CardContent, Button, Collapse, Avatar, IconButton} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: 180,
    width: 280,
    marginTop: 20, 
    background: 'linear-gradient(60deg, #FF96F3 10%, #11FFF3 100%)',
    secondary:'pink',
    padding:2
  },
  content: {
    paddingBottom: theme.spacing(3),
  },
  title1:{
    width:180,
    flex:1
  },
  subtitle:{
    whiteSpace: 'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
    flex:1
  },
  button:{
    marginBottom:10,
    flex:1
  }
}));

const StockCard = (market) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container justify="flex-start" spacing={3} className="classes.root">
          {market.market.map((mkt) => (
            <Grid xs={3} key={mkt.id} item>
              <Card elevation={8} className={classes.card}>
                <CardContent className={classes.content}>
                  <Typography variant="h5" style={{display: 'inline-block'}} className={classes.title1} gutterBottom>{mkt.Symbol} &nbsp;</Typography>
                  <Typography variant="h6" style={{display: 'inline-block'}}>${mkt.HoldPrice}</Typography>
                  <Typography variant="subtitle2" className={classes.subtitle} gutterBottom>{mkt.Name}</Typography>
                  <Typography variant="caption" className={classes.subtitle} gutterBottom>Qty: {mkt.Volume}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton className={classes.button} onClick={() => {alert(mkt.Fav);mkt.Fav = true; alert(mkt.Fav);}} aria-label="add to favorites">
                    {mkt.Fav 
                    ? <FavoriteIcon color="secondary" className={classes.button}/>
                    : <FavoriteIcon className={classes.button}/>
                    }
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
    </Fragment>
  );
}
export default StockCard;