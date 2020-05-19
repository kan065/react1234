import React, { FC } from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import styles from "./reminders-view.module.css";
import { RemindersListView } from "containers/RemindersListView/RemindersListView";
import { AddReminderView } from "containers/AddReminderView/AddReminderView";
import { ReminderDetailedView } from "containers/ReminderDetailedView/ReminderDetailedView";

export const RemindersView: FC = () => {
  let { path } = useRouteMatch();

  console.log(path);

  return (
    <div className={styles.root}>
      <Switch>
        <Route exact path={`${path}`} component={RemindersListView} />
        {/* <Route path={`${path}/:reminderId`} component={ReminderDetailedView} /> */}
        <Route exact path={`${path}/add}`} component={AddReminderView} />
      </Switch>
    </div>
  );
};
