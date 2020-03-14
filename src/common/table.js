import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { array } from "prop-types";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  alignRight: {
    textAlign: 'right'
  },
  cellTitle: {
    backgroundColor: '#D3D3D3',
  }
}));

/**
 * CustomTable - Component displays the information in tabular format. 
 * 
 * @param {data} object contains the data to be displayed in table. * 
 * 
 * @returns {React.ReactElement} CustomTable
 */
const CustomTable = ({ data }) => {
  const classes = useStyles();

  const renderTableData = (type, value) => {
    switch (type) {
      case 'object':
        return (<List>{value.map((row, index) => <ListItem key={index}><ListItemText className={classes.alignRight} primary={row} /></ListItem>)}</List>)
      case 'number':
        return <TableCell align="right">{value}</TableCell>;
      case 'boolean':
        return <TableCell align="right"> {value ? <DoneIcon /> : <CloseIcon />} </TableCell>;
      default:
        return <TableCell align="right">{value}</TableCell>
    }
  }

  return (
      <Paper className={classes.paper}>
        <Table size="small">
          <TableBody>
            {data.map(row => {
              const { label, value } = row;
              return (
                <TableRow key={label}>
                  <TableCell className={classes.cellTitle}>
                    {label}
                  </TableCell>
                  {renderTableData(typeof value, value)}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
  );
}

CustomTable.propTypes = {
  data: array
};

export default CustomTable;
