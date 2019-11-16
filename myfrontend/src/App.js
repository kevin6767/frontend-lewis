import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Shop } from './components/Shop';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';

function App() {
  return (
    <React.Fragment>
    <Layout> 
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route component={NoMatch} />

      </Switch>
    </Router>
    </Layout>
    </React.Fragment>
  );
}

export default App;
