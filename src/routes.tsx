import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from 'pages/Home'

const Routes = () => (
  <Router>
    <Route exact path="/" component={HomePage} />
  </Router>
)

export default Routes
