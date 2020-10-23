import * as React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import RepositoriesPage from 'pages/Repositories'

const Routes = () => (
  <Router>
    <Route exact path="/repositories" component={RepositoriesPage} />
    <Redirect to="/repositories" />
  </Router>
)

export default Routes
