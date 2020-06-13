import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { PagesRouter } from './pages/index'
import { Navbar } from './components/Navbar'

export const App = () => (
  <Router>
    <Navbar />
    <PagesRouter />
  </Router>
)
