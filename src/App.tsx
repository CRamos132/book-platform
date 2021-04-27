import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookDetails from './pages/BookDetails';
import Landing from './pages/Landing';
import Search from './pages/Search';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/search" exact>
        <Search />
      </Route>
      <Route path="/book" exact>
        <BookDetails />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
