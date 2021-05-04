import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '@components/Layout';
import Home from '@pages/Home';
import NotFound from '@components/NotFound';

import  '@styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;