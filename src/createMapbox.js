import mapboxgl from "mapbox-gl/dist/mapbox-gl";

const mapOptinos = {
    style: 'mapbox://styles/joyzen1907/cjpt4v10x0q7n2rmhk41tcbdc',
    center: [114.246486, 30.545726],
    zoom: 9
};

//初始化mapbox
const createMapbox = e => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam95emVuMTkwNyIsImEiOiJjamd4MmdyN24xc240MzNwOWQ5Nzh5MGdoIn0.d_k36vaX1aBU0Q5uLekRog';
    var map = new mapboxgl.Map(Object.assign({
        container: e,
    }, mapOptinos));
};

export { createMapbox };