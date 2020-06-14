import React from 'react'
import {
  Typography, Container, makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'inherit',
    flexDirection: 'column',
    paddingTop: theme.spacing(5),
    margin: '0 auto',
    alignItems: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
    width: 'fit-content',
  },
}))

export const PageHeader = ({ sectionName, isEmpty, children }) => {
  const classes = useStyles()
  return (
    <Container className={classes.wrapper}>
      <Typography align="center" variant="h5">
        {`${sectionName} from star wars universe`.toUpperCase()}
      </Typography>
      {children}
      {isEmpty
      && (
        <Typography
          align="center"
          variant="overline"
          className={classes.button}
        >
          {`There is no data for ${sectionName}`}
        </Typography>
      )}
    </Container>
  )
}
