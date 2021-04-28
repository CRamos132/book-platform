import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookDetails from './pages/BookDetails';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/home">
        <Landing />
      </Route>
      <Route path="/search" exact>
        <Search />
      </Route>
      <Route path="/book" exact>
        <BookDetails />
      </Route>
      {/*
        because we have multiple cases where the homepage
        links don't exist I've taken the liberty to use the 404
        route to handle those cases
      */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
