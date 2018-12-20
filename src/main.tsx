import { h, app, View, ActionType, Component } from "hyperapp"

interface Attributes {
  by: number;
}

export const Up: Component<Attributes, State, Actions> = ({ by }) => (_, actions) => (
  <button onclick={() => actions.up(by)}>+ {by}</button>
)

export const Down: Component<Attributes, State, Actions> = ({ by }) => (_, actions) => (
  <button onclick={() => actions.down(by)}>- {by}</button>
)

export const Double: Component<{}, State, Actions> = () => (state, actions) => (
  <button onclick={() => actions.up(state.count)}>+ {state.count}</button>
)

interface State {
  count: number;
}

interface Actions {
  up: ActionType<State, Actions>;
  down: ActionType<State, Actions>;
}

export const view: View<State, Actions> = state => (
  <main>
    <h1>{state.count}</h1>
    <Up by={2} />
    <Down by={1} />
    <Double />
  </main>
)

const initialState: State = {
  count: 0,
}

const actions: Actions = {
  up: (by: number) => (state) => ({ count: state.count + by }),
  down: (by: number) => (state) => ({ count: state.count - by })
}

app<State, Actions>(initialState, actions, view, document.body);