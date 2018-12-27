import { VectorTile, VectorTileLayer, VectorTileFeature } from "@mapbox/vector-tile";
import pbf from "pbf";

function startDebug(map) {
    const canvas = document.createElement('canvas');
    canvas.className = "debug";
    map._container.appendChild(canvas);
    map.on(function () {
        console.log(arguments);
    });
}

export { startDebug };

