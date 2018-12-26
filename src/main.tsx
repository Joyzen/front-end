import { h, app, View, ActionType, Component } from "hyperapp";
import { createMapbox } from "./createMapbox";
import "./style/index.css";

interface Attributes {
  by: number;
};

interface Actions {
  up: ActionType<State, Actions>;
  down: ActionType<State, Actions>;
}

interface State {
  count: number;
};

const initialState: State = {
  count: 0,
};

const actions: Actions = {
  up: (by: number) => (state) => ({ count: state.count + by }),
  down: (by: number) => (state) => ({ count: state.count - by })
}

export const view: View<State, Actions> = () => (
  <div class="fullsize" oncreate={createMapbox}>
  </div>
);

app<State, Actions>(initialState, actions, view, document.body);
