import { h, app } from "hyperapp";
import { createMapbox } from "./createMapbox";
import './style/index.css';

const state = {
    count: 0
};

const actions = {
    down: value => state => ({ count: state.count - value }),
    up: value => state => ({ count: state.count + value })
};

const view = (state, actions) => (
    <div class="fullsize" oncreate={createMapbox} >
    </div>
);
app(state, actions, view, document.body);



