import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Grid, Box } from '@material-ui/core'
import { MainPage } from './MainPage'
import { NoPageFound } from './NoPageFound'
import { getInitialData } from '../helpers'

export const PagesRouter = ({ pageData }) => {
  const directRoutes = pageData.map((page, index, array) => (
    <Route path={`/${page.name}`}>
      <MainPage
        pageData={array[index]}
        initialState={getInitialData(array.map((data) => data.name))}
      />
    </Route>
  ))

  return (
    <Box
      component={Grid}
      container
      direction="column"
      alignItems="center"
      justify="center"
      height="calc(100% - 64px)"
    >
      <Switch>
        <Route exact path="/">
          <Redirect from="/" to="/people" />
        </Route>
        {directRoutes}
        <Route path="*" component={NoPageFound} />
      </Switch>
    </Box>
  )
}
