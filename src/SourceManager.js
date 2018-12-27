import { VectorSource } from "./VectorSource";

class SourceManager {
    constructor(opt) {
        this._opt = sourcesOpt;
        this._resources = {};
        this._accessToken = opt.accessToken;
        this._style = opt.style;
        this.parseSources(opt.sources);
    }

    parseSources(sources) {
        for (const id in sources) {
            this.createSource(Object.assign({}, sources[id], {
                accessToken: this._accessToken
            }));
        }
    }

    loadGeometry(z, x, y) {
        for (const id in this._resources) {
            const resource = this._resources[id];
            resource.loadTile(z, x, y).then(e => {

            });
        }
    }

    createSource(source) {
        //暂时只解析矢量瓦片数据
        switch (source.type) {
            case "vector":
                this._resources[id] = new VectorSource(source);
                break;
            default:
                break;
        }
    }
}

export { SourceManager };