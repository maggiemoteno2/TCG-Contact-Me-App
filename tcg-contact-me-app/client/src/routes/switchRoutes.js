import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from './history'
import Companies from './../components/Companies'
import CompanyInformation from './../components/CompanyInformation'


function route () {
  return (
    <div>
      <Router history={history}>
        <Route exact path='/company' component={props => <CompanyInformation {...props} />} />
        <Route exact path='/' component={props => <Companies {...props} />} />
      </Router>
    </div>
  )
}

export default route