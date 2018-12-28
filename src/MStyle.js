import { normalizeMapboxStyleUrl, fetchJson } from "./util";
import { SourceManager } from "./SourceManager";

/**
 * 管理mapbox样式类
 */
class MStyle {
    constructor(map) {
        this._map = map;
        this._sourceManager = null;
        this._mapboxAccesstoken = map._mapboxAccessToken;
    }

    /**
     * 设置地图样式
     * @param {string|object} opt 样式配置地址或者对象
     * 参数类型为string：支持mapbox的style配置地址类型，如：mapbox://styles/joyzen1907/cjpt4v10x0q7n2rmhk41tcbdc
     * 或者一个返回样式配置json数据的http地址
     */
    setStyle(opt) {
        if (typeof opt == 'string') {
            const url = normalizeMapboxStyleUrl(opt, this._mapboxAccesstoken);
            fetchJson(url).then(this._parseStyleJson.bind(this));
        } else if (typeof opt == 'object') {
            this._parseStyleJson(opt);
        }
    }

    /**
     * 解析stylejson数据
     * @param {object} json 
     */
    _parseStyleJson(json) {
        //解析数据源
        if (!json.sources) throw new Error('sources属性是必须的！');
        this._sourceManager = new SourceManager({
            sources: json.sources,
            style: this,
            accessToken: this._mapboxAccesstoken
        });
    }


}

export { MStyle };