import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
 
import App from '../imports/ui/components/App.jsx';
import Welcome from '../imports/ui/components/Welcome.jsx'
 
Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome}/>
      </Route>
    </Router>
  ), document.getElementById('app'))
});