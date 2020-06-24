import React from 'react'
import { TableCell } from '@material-ui/core'
import Mylink from '@material-ui/core/Link'
import { Link } from 'react-router-dom'

export const Cell = (props) => {
  const {
    name,
    cell,
    sectionName,
    row,
    setEditMode,
  } = props
  switch (name) {
    case 'name':
      return (
        <TableCell>
          <Mylink
            component={Link}
            to={`/${sectionName}/${row.id}`}
            onClick={() => setEditMode(true)}
          >
            {cell}
          </Mylink>
        </TableCell>
      )
    case 'beloved':
      return null
    default:
      return (
        <TableCell>
          {cell}
        </TableCell>
      )
  }
}
