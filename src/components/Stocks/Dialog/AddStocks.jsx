import React, {Component , Fragment }  from 'react';
import { withStyles } from '@material-ui/core/styles';
import {FormControl, Button, Dialog, Fab, TextField, Typography, IconButton} from '@material-ui/core';
import { DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import Markets from '../../../data/stocksMarket';
import SmButton from '../../Controls/SmButton';
import { getDateOperators } from '@material-ui/data-grid';
  
const styles = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
});

export default withStyles(styles)(class AddStocksDialog extends Component {

  constructor(){
    super();
    this.state = {
      open:false,
      form:{
        Symbol: "",
        Name: "",
        HoldPrice: 0.0,
        Date:new Date().toISOString().slice(0, 10),
        Quantity:0,
        Market:""
      }
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleClickOpen = (event) => {
    this.setState({ open:true });
  }

  handleClose = (event) => {
    this.setState({ open:false });
  }

  handleChange = (event) => {
    this.setState({ 
      form:{
        ...this.state.form, 
        [event.target.name]: event.target.value
        } 
      });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onAddStock(this.state.form);
    this.setState({ open:false });
  }

render(){
    const { open, form:{ Symbol, Name, HoldPrice, Date, Quantity, Market } } = this.state;
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <Fab size="small" color="primary" aria-label="add" onClick={this.handleClickOpen}>
            <AddIcon />
          </Fab>
          <Fab size="small" color="secondary" aria-label="remove">
            <RemoveIcon/>
          </Fab>
          <Fab size="small" color="warning" aria-label="edit">
            <EditIcon />
          </Fab>
        </div>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogContent dividers>
            <DialogContentText>
              <Typography variant="h6" className={classes.title} color="primary">
                Please enter stock details to add in the preferred market.
              </Typography>
            </DialogContentText>
            <form className={classes.root}>
              {/* <FormControl autoComplete="off" component="fieldset"> */}
                <TextField id="field1" required type="text" label="Symbol" name="Symbol" value={Symbol} onChange={this.handleChange}/>
                <TextField id="field2" required  type="text" label="Name" name="Name" value={Name} onChange={this.handleChange}/>
                <TextField id="field3" required label="Date" defaultValue={Date} type="Date" name="date" value={Date} onChange={this.handleChange}/>
                <TextField id="field4" required label="Quantity"  type="text" name="Quantity" value={Quantity} onChange={this.handleChange}/>
                <TextField id="field5" required label="Price"  type="text" name="HoldPrice" value={HoldPrice} onChange={this.handleChange}/>
                <TextField id="field6" select label="Select Market" name="Market"
                  required  value={Market} onChange={this.handleChange} SelectProps={{ native: true, }}>
                  {Markets.map((mkt) => ( <option key={mkt} value={mkt}> {mkt} </option> ))}
                </TextField>
              {/* </FormControl> */}
            </form>
          </DialogContent>
          <DialogActions>
            <SmButton color="blue" type="submit" onClick={this.handleSubmit} variant="outlined">
              Add
            </SmButton>
            <SmButton autoFocus onClick={this.handleClose} color="red">
              Cancel
            </SmButton>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
});