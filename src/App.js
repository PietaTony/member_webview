import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DesignerPage from './pages/DesignerPage';
import TablePage from './pages/table/TablePage';

export default function App() {
  return (
    <Router>
      <Switch>
        {ROUTES.map((route, i) => (
          <Route
            exact
            key={i}
            path={route.path}
            render={() => <route.component />}
          />
        ))}
      </Switch>
    </Router>
  );
}

const ROUTES = [
  {
    path: '/',
    component: DesignerPage,
  },
  {
    path: '/table',
    component: TablePage,
  },
];
