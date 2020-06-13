import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, List } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import { linksData } from '../constants'
import { NavbarLink } from './common/NavbarLink'

const useStyles = makeStyles({
  navbar: {
    display: 'flex',
  },
})

export const Navbar = () => {
  const classes = useStyles()
  const links = linksData.map((linkData) => (
    <NavbarLink key={linkData.name} linkName={linkData.name} linkIcon={linkData.icon} />
  ))
  return (
    <AppBar position="static">
      <Toolbar>
        <List component="nav" className={classes.navbar}>
          {links}
        </List>
      </Toolbar>
    </AppBar>
  )
}
