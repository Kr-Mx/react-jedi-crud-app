import React, { useEffect } from 'react'
import {
  Paper,
  TableContainer,
  makeStyles,
  Typography,
} from '@material-ui/core'
import MaterialTable from '@material-ui/core/Table'
import { TableHead } from './TableHead'
import { TableBody } from './TableBody'

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
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  message: {
    marginTop: theme.spacing(2),
    width: 'fit-content',
  },
}))

export const Table = (props) => {
  const {
    tableData,
    deleteRow,
    sectionName,
    setEditMode,
  } = props
  const classes = useStyles()
  useEffect(() => { setEditMode(false) }, [setEditMode])
  return (
    <>
      {(tableData.length)
        ? (
          <TableContainer component={Paper} className={classes.wrapper}>
            <MaterialTable className={classes.table}>
              <TableHead headings={Object.keys(tableData[0])} classes={classes} />
              <TableBody
                tableData={tableData}
                classes={classes}
                sectionName={sectionName}
                deleteRow={deleteRow}
                setEditMode={setEditMode}
              />
            </MaterialTable>
          </TableContainer>
        )
        : (
          <Typography
            align="center"
            variant="overline"
            className={classes.message}
          >
            {`There is no data for ${sectionName}`}
          </Typography>
        )}
    </>
  )
}
