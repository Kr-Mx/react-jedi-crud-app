import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { People } from './People'
import { Planets } from './Planets'
import { Starships } from './Starships'
import { NoPageFound } from './NoPageFound'

export const PagesRouter = () => (
  <Switch>
    <Route path="/people" component={People} />
    <Route path="/planets" component={Planets} />
    <Route path="/starships" component={Starships} />
    <Redirect from="/" to="/people" />
    <Route path="*" component={NoPageFound} />
  </Switch>
)
