import React from 'react'
import { Snackbar, IconButton, makeStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme) => ({
  wrapper:
    {
      '& .MuiSnackbarContent-root': {
        backgroundColor: theme.palette.error.dark,
        color: 'white',
      },
    },
}))

export const ErrorSnackbar = ({ error, setError }) => {
  const classes = useStyles()
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      className={classes.wrapper}
      open={!!error.message}
      onClose={() => { setError(false) }}
      autoHideDuration={6000}
      message={error.message}
      action={(
        <IconButton size="small" color="inherit" onClick={() => { setError(false) }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      )}
    />
  )
}
