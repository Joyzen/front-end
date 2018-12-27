class Paint {
    constructor(canvas, style) {
        this._style = style;
        this._canvas = canvas;
        this._cxt = canvas.getContext('2d');
    }
}