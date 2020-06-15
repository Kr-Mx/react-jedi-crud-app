import React from 'react'
import {
  AppBar, List, Toolbar, makeStyles,
} from '@material-ui/core'
import { NavbarLink } from './common/NavbarLink'

const useStyles = makeStyles({
  navbar: {
    display: 'flex',
  },
})

export const Navbar = ({ pageData }) => {
  const classes = useStyles()
  const links = pageData.map((linkData) => (
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
