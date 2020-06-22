import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { Navbar } from './components/common/Navbar'
import { NotExistedPage } from './components/pages/NotExistedPage'
import { People } from './components/pages/People'
import { Planets } from './components/pages/Planets'
import { Starships } from './components/pages/Starships'

export const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Redirect from="/" to="/people" />
      </Route>
      <Route path="/people" component={People} />
      <Route path="/planets" component={Planets} />
      <Route path="/starships" component={Starships} />
      <Route path="*" component={NotExistedPage} />
    </Switch>
  </Router>
)
