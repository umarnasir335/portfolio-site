import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Home'
import {Jumbotron} from './Jumbotron'
import {Portfolio} from './Portfolio'
import { Layout } from './Layout';

class App extends React.Component{
  render(){
  return (
    <React.Fragment>
      <Jumbotron />
      <Layout>
    <Router>
      <Switch>
        <Route exact path ="/" component={Home} />
      </Switch>
    </Router>
    </Layout>

    </React.Fragment>

  );
}
}
export default App;
