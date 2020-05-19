import React from "react";
import "./App.css";
import { Layout, ErrorState } from "components";
import { TodoView } from "containers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { RemindersView } from "containers";

export function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Redirect exact from="/" to="/todo" />
            <Route path="/todo" component={TodoView} />
            <Route path="/reminders" component={RemindersView} />
            <Route path="*" component={ErrorState} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}
