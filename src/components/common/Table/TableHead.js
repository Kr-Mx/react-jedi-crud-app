import { TableCell, TableRow } from '@material-ui/core'
import THead from '@material-ui/core/TableHead'
import React from 'react'
import { capitalize } from '../../../helpers'

export const TableHead = ({ headings, classes }) => {
  const tableHeadings = headings.map((heading) => (
    <TableCell
      key={heading}
      className={classes.head}
    >
      {capitalize(heading.split('_').join(' '))}
    </TableCell>
  ))
  return (
    <THead>
      <TableRow>
        {tableHeadings}
        <TableCell className={classes.head}>Beloved</TableCell>
        <TableCell className={classes.head}>Delete</TableCell>
      </TableRow>
    </THead>
  )
}
