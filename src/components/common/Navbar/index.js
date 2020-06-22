import React from 'react'
import { AppBar, List, makeStyles } from '@material-ui/core'
import { NavbarLink } from './NavbarLink'
import { appCommonData } from '../../../constants'

const useStyles = makeStyles({
  navbar: {
    display: 'flex',
    padding: '8px',
  },
})

export const Navbar = () => {
  const classes = useStyles()
  const links = appCommonData.map(({ name, icon }) => (
    <NavbarLink key={name} linkName={name} linkIcon={icon} />
  ))

  return (
    <AppBar position="static">
      <List component="nav" className={classes.navbar}>
        {links}
      </List>
    </AppBar>
  )
}
