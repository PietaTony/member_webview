import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "../pages/Pages.json";
// import TablePage from "../pages/table/TablePage";
import CreateAccountPage from "../pages/CreateAccountPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
// import LoginPage from "../pages/LoginPage";
import UpdatePasswordPage from "../pages/UpdatePasswordPage";
import DesignerPage from "../pages/designer/DesignerPage";
import MainPage from "../pages/MainPage";

const routes = [
  // { path: Pages.root, component: DesignerPage },
  {
    path: Pages.root + ":token",
    component: MainPage,
  },
  {
    path: Pages.createAccount,
    component: CreateAccountPage,
  },
  {
    path: Pages.updatePassowrd,
    component: UpdatePasswordPage,
  },
  {
    path: Pages.forgetPassword,
    component: ForgetPasswordPage,
  },
  {
    path: Pages.root,
    component: DesignerPage,
  },
];

export default function RouterRoot() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
