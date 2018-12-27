import { h, app, View, ActionType, Component } from "hyperapp";
import { createMapbox } from "./createMapbox";
import "./style/index.css";

export const view = () => (
  <main>
    <div class="fullsize" oncreate={createMapbox}></div>
  </main>
);

app(null, null, view, document.body);
