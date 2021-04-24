import React from 'react';
import {BrowserRouter, Switch, Route,} from 'react-router-dom'
import Landing from './pages/Landing'
import Search from './pages/Search';

const App: React.FC = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Landing />
        </Route>
        <Route path='/search' exact>
          <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
