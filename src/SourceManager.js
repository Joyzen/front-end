import { VectorSource } from "./VectorSource";
import { doesNotReject } from "assert";

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
        let ct = Object.keys(this._resources).length;
        const tiles = [];
        function done() {
            
        }
        return new Promise(function (resolve, reject) {
            for (const id in this._resources) {
                const resource = this._resources[id];
                resource.loadTile(z, x, y).then(tile => {
                    ct--;
                    tiles.push(tile);
                    done();
                }, e => ct--);
            }
        });
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