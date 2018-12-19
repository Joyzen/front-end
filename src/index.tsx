import { h, app } from "hyperapp";
import { createMapbox } from "./createMapbox";
import "./style/index.css";

const state = {
    count: 0
};

const actions = {
    down: (value: any) => (state: any) => ({ count: state.count - value }),
    up: (value: any) => (state: any) => ({ count: state.count + value })
};

const view = (state: any, actions: any) => (
    <div class="fullsize" oncreate={createMapbox} >
    </div>
);
app(state, actions, view, document.body);



