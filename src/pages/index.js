import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Grid, Box } from '@material-ui/core'
import { People } from './People'
import { Planets } from './Planets'
import { Starships } from './Starships'
import { NoPageFound } from './NoPageFound'

export const PagesRouter = () => (
  <Box
    component={Grid}
    container
    alignItems="center"
    justify="center"
    height="calc(100% - 64px)"
  >
    <Switch>
      <Route exact path="/">
        <Redirect from="/" to="/people" />
      </Route>
      <Route path="/people" component={People} />
      <Route path="/planets" component={Planets} />
      <Route path="/starships" component={Starships} />
      <Route path="*" component={NoPageFound} />
    </Switch>
  </Box>
)
