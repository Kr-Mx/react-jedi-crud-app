import {
  IconButton,
  TableCell,
  TableRow,
  Checkbox,
} from '@material-ui/core'
import shortId from 'shortid'
import TBody from '@material-ui/core/TableBody'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import { Cell } from './TableCell'

export const TableBody = (props) => {
  const {
    tableData,
    classes,
    deleteRow,
    updateRow,
    sectionName,
    setEditMode,
  } = props
  const tableBody = tableData.map(
    (row) => (
      <TableRow key={row.id} className={classes.row}>
        {Object.entries(row).map(
          ([name, cell]) => (
            <Cell
              key={shortId.generate()}
              name={name}
              sectionName={sectionName}
              cell={cell}
              row={row}
              setEditMode={setEditMode}
            />
          ),
        )}
        <TableCell>
          <Checkbox
            checked={row.beloved}
            color="primary"
            onChange={() => updateRow(row.id, { ...row, beloved: !row.beloved })}
          />
        </TableCell>
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
