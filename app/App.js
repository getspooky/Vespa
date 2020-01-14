/*
 * This file is part of the Vespa package.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import VespaRoutes from './routes/web';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        {VespaRoutes.map(({id,path,component}) => {
          return (<Route key={id} exact path={path} component={component} />)
        })}
      </Switch>
    </Router>
  );
}

export default App;
