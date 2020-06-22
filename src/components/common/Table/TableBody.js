import { IconButton, TableCell, TableRow } from '@material-ui/core'
import shortId from 'shortid'
import Mylink from '@material-ui/core/Link'
import TBody from '@material-ui/core/TableBody'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'

export const TableBody = (props) => {
  const {
    tableData,
    classes,
    deleteRow,
    sectionName,
    setEditMode,
  } = props
  const tableBody = tableData.map(
    (row) => (
      <TableRow key={row.id} className={classes.row}>
        {Object.values(row).map(
          (cell, index) => (
            <TableCell key={shortId.generate()}>
              {(index) ? cell
                : (
                  <Mylink
                    component={Link}
                    to={`/${sectionName}/${row.id}`}
                    onClick={() => setEditMode(true)}
                  >
                    {cell}
                  </Mylink>
                )}
            </TableCell>
          ),
        )}
        <TableCell>
          <IconButton size="small" onClick={() => { deleteRow(row.id) }}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    ),
  )
  return (
    <TBody>
      {tableBody}
    </TBody>
  )
}
