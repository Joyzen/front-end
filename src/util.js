
import axios from "axios";

//通用工具方法类

/**
 * 判断url是否mapbox协议地址
 * @param {string} url 
 */
export function isMapboxUrl(url) {
    return url.indexOf('mapbox:') === 0;
}

/**
 * 将mapbox style地址转换成http地址
 * @param {string} url mapbox格式的style地址
 * @param {string} accessToken 访问mapbox数据的地址
 */
export function normalizeMapboxStyleUrl(url, accessToken) {
    if (!isMapboxUrl(url)) return url;
    url = url.split('mapbox://styles')[1];
    return `https://api.mapbox.com/styles/v1${url}?access_token=${accessToken}`;
}

export function normalizeSourceUrl(url, accessToken) {
    if (!isMapboxUrl(url)) return url;
    url = url.split('mapbox://')[1];
    return `https://api.mapbox.com/v4/${url}.json?access_token=${accessToken}`;
}

export function normalizeTileUrl(url, sourceUrl, accessToken) {
    if (!isMapboxUrl(sourceUrl)) return url;
    sourceUrl = sourceUrl.split('mapbox://')[1];
    return `https://api.mapbox.com/v4/${sourceUrl}/{z}/{x}/{y}.vector.pbf?access_token=${accessToken}`;
}

export function fetch(opt) {
    return new Promise(function (resolve, reject) {
        axios(opt)
            .then(e => resolve(e), e => reject(e))
            .catch(err => console.error(err));
    });
}

export function fetchJson(url) {
    return fetch({
        url: url
    });
}

export function fetchArrayBuffer(url) {
    return fetch({
        url: url,
        responseType: 'arraybuffer',
        headers: { 'Accept': 'application/x-protobuf' }
    });
}
