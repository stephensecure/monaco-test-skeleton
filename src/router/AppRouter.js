import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ShowStories from '../components/ShowStories';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="my-10 mx-20">
        <Header />
        <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/:type" component={ShowStories} />
        <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;