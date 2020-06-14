import React from 'react'
import { Link } from 'react-router-dom'
import {
  ListItemIcon, ListItem, SvgIcon, ListItemText, makeStyles,
} from '@material-ui/core'
import { capitalize } from '../../helpers'

const useStyles = makeStyles((theme) => ({
  container: {
    '&:hover': {
      color: theme.palette.secondary.dark,
      backgroundColor: 'transparent',
    },
  },
  icon: {
    minWidth: '32px',
    color: 'inherit',
  },
}))

export const NavbarLink = ({ linkName, linkIcon: LinkIcon }) => {
  const classes = useStyles()
  return (
    <ListItem
      button
      component={Link}
      to={`/${linkName}`}
      className={classes.container}
    >
      <ListItemIcon className={classes.icon}>
        <SvgIcon>
          <LinkIcon />
        </SvgIcon>
      </ListItemIcon>
      <ListItemText primary={capitalize(linkName)} />
    </ListItem>
  )
}
