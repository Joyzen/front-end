import Mapboxgl from "mapbox-gl";

const defaultOpt = {
    style: 'mapbox://styles/joyzen1907/cjpt4v10x0q7n2rmhk41tcbdc'
};//默认配置

function generateMapOpt
    (container: string | Element, opts?: Object): Mapboxgl.MapboxOptions {
    const opt = { container };
    Object.assign(opt, defaultOpt);
    Object.assign(opt, opts);
    return opt;
}

//初始化mapbox
const createMapbox = (e: Element) => {
    Mapboxgl.accessToken = 'pk.eyJ1Ijoiam95emVuMTkwNyIsImEiOiJjamd4MmdyN24xc240MzNwOWQ5Nzh5MGdoIn0.d_k36vaX1aBU0Q5uLekRog';
    const map = new Mapboxgl.Map(generateMapOpt(e));
    Object.assign(window, { map });
    return map;
};

export { createMapbox };