import { VectorTile, VectorTileLayer, VectorTileFeature } from "@mapbox/vector-tile";

class VectorTile {
    constructor(pbf) {
        this.x = opt.x;
        this.y = opt.y;
        this.z = opt.z;
        this.pbf = opt.pbf;
        this.mVectorTile;
        this.layers;
        this.features;

        this.parseVector(this.pbf);
    }

    parseVector(pbf) {
        this.mVectorTile = new VectorTile(pbf);
        this.layers = this.mVectorTile.layers;
        const features = this.features = {};
        for (const id in this.layers) {
            const layer = this.layers[id];
            features[id] = [];
            for (let i = 0; i < layer.length; i++) {
                const feature = layer.feature(i);
                feature.geometry = feature.loadGeometry();
                features[id].push(feature);
            }
        }
    }
}

export { VectorTile };