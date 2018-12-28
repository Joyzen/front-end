import { normalizeSourceUrl, normalizeTileUrl, fetchJson } from "./util";
import { fetchArrayBuffer } from "./util";
import { VectorTile } from "./VectorTile";

class VectorSource {
    constructor(opt) {
        this._opt = opt;
        this.type = opt.type;
        this.ready = false;

        this._tileCaches = new Map();

        this._listeners = [];

        this._accessToken = opt.accessToken;
        this._tiles = opt.tiles;
        if (!this._tiles && !opt.url) throw new Error("tiles或url属性必须存在！");
        if (this._tiles) this.dispatchEvent("TilesReady", this);
        else this.fetchTileJson(opt.url);

        this.addEventListener('TilesReady', e => {
            this.tiles = this._tiles.map(e => normalizeTileUrl(e));
            this.ready = true;
        });
    }

    fetchTileJson(url) {
        url = normalizeSourceUrl(url);
        fetchJson(url).then(json => {
            this._tiles = json.tiles;
            this.dispatchEvent("TilesReady", this)
        });
    }

    loadTile(z, x, y) {
        let ct = this.tiles.length;
        const urls = this.tiles.map(e => e.replace("${x}", x).replace("${y}", y).replace("${z}", z));
        //暂时只考虑一个
        const url = urls[0];
        const that = this;
        return new Promise(function (resolve, reject) {
            if (that._tileCaches.get([z, x, y]))
                resolve(that._tileCaches.get([z, x, y]));
            fetchArrayBuffer(url).then(e => {
                const tile = new VectorTile(e);
                that._tileCaches.put([z, x, y], tile);
                resolve(tile);
            }, reject);
        });
    }

    /**
     * 注册监听
     * @param {string} type 事件类型
     * @param {function} listener 监听器
     * @param {object} scope 监听器this指向变量
     */
    addEventListener(type, listener, scope) {
        this._listeners.push({ type, listener, scope });
    }

    /**
     * 触发事件
     * @param {string} type 事件类型
     * @param  {...any} args 调用监听器参数
     */
    dispatchEvent(type, ...args) {
        const listeners = this._listeners.filter(e => e.type == type);
        listeners.forEach(e => {
            if (e.scope) e.listener.apply(e.scope, args);
            else e.listener.apply(this, args);
        });
    }
}

export { VectorSource };