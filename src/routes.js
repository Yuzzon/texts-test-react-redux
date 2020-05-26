import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TextsList from './pages/TextsList'
import SingleText from './pages/SingleText'


export const Routes = () => (
   <Switch>
      <Route exact path="/" component={TextsList} />
      <Route path="/text/:id" component={SingleText} />
   </Switch>
)
