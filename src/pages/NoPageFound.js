import React from 'react'
import { Typography, SvgIcon, makeStyles } from '@material-ui/core'
import { ReactComponent as NotFound } from '../assets/images/not-found-icon.svg'

const useStyles = makeStyles({
  icon: {
    fontSize: '200px',
  },
})

export const NoPageFound = () => {
  const classes = useStyles()
  return (
    <>
      <SvgIcon className={classes.icon}>
        <NotFound />
      </SvgIcon>
      <Typography variant="h3">404 Not Found</Typography>
    </>
  )
}
