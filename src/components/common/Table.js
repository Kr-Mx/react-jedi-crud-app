import React from 'react'
import {
  Paper,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  makeStyles,
  IconButton,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import shortId from 'shortid'
import { capitalize } from '../../helpers'

const useStyles = makeStyles((theme) => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  table: {
    minWidth: 700,
  },
  wrapper: {
    marginTop: theme.spacing(3),
  },
  head: {
    backgroundColor: theme.palette.common.black,
  },
}))

const TBody = ({ tableData, classes, deleteRow }) => {
  const tableBody = tableData.map(
    (row) => (
      <TableRow key={row.id} className={classes.row}>
        {Object.values(row).map(
          (item) => (
            <TableCell key={shortId.generate()}>
              {item}
            </TableCell>
          ),
        )}
        <TableCell>
          <IconButton size="small" onClick={() => deleteRow(row.id)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    ),
  )
  return (
    <TableBody>
      {tableBody}
    </TableBody>
  )
}

const THead = ({ headings, classes }) => {
  const tableHeadings = headings.map((heading) => (
    <TableCell key={heading}>{capitalize(heading)}</TableCell>
  ))
  return (
    <TableHead className={classes.head}>
      <TableRow>
        {tableHeadings}
        <TableCell>Delete</TableCell>
      </TableRow>
    </TableHead>
  )
}

export const PageTable = ({ tableData, headings, deleteRow }) => {
  const classes = useStyles()
  return (
    <>
      {(!!tableData.length)
      && (
        <TableContainer component={Paper} className={classes.wrapper}>
          <Table className={classes.table}>
            <THead headings={headings} classes={classes} />
            <TBody
              tableData={tableData}
              classes={classes}
              deleteRow={deleteRow}
            />
          </Table>
        </TableContainer>
      )}
    </>
  )
}
