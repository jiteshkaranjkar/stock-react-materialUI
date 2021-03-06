import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import SmButton from '../Controls/SmButton';
import { useSnackbar } from 'notistack';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:10,
  },
  button: {
    flexGrow: 1,
  },

}));

const columns = [
  { field: 'Symbol', headerName: 'Symbol', width: 150 },
  { field: 'Name', headerName: 'Name', width: 400 },
  { field: 'HoldPrice', headerName: 'HoldPrice', width: 120 },
];

const sortModel = [
  {
    field: 'Symbol',
    sort: 'asc',
  },
]

const StockGridList = ({market}) => {
  const classes = useStyles();
  const [rows, setRows] = useState(market);
  const [deletedRows, setDeletedRows] = useState([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  
  const handleRowSelection = (row) => {
    setDeletedRows([...deletedRows, ...rows.filter((r) => r.id === row.data.id)]);
  }

  const handleDelete = () => {
    if(deletedRows.length === 0){
          enqueueSnackbar('Select rows to perform delete operation',{variant:'error'});
    }
    else{
    setRows(
      rows.filter((r) => deletedRows.filter((dr) => dr.id === r.id).length < 1)
      );
    }
  }
 
  return (
    <div style={{ height: 720, width: '100%' }}  className={classes.root}>
      <DataGrid checkboxSelection  sortModel={sortModel} rowHeight={35}  rows={rows} columns={columns} 
          onRowSelected={handleRowSelection}/>
      <SmButton color="blue" type="submit" onClick={handleDelete} variant="outlined">
        Delete
      </SmButton>
    </div>
  );
}
export default StockGridList;