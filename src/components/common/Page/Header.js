import React from 'react'
import {
  Typography, Container, makeStyles, Button,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import shortId from 'shortid'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'inherit',
    flexDirection: 'column',
    paddingTop: theme.spacing(5),
    margin: '0 auto',
    alignItems: 'center',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}))

export const Header = ({ sectionName }) => {
  const classes = useStyles()
  return (
    <Container className={classes.wrapper}>
      <Typography align="center" variant="h5">
        {`${sectionName} from star wars universe`.toUpperCase()}
      </Typography>
      <Button
        className={classes.button}
        color="primary"
        variant="outlined"
        component={Link}
        to={`${sectionName}/${shortId.generate()}`}
      >
        add new item
      </Button>
    </Container>
  )
}
