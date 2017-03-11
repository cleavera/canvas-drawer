"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CanvasDrawer_1 = require("./CanvasDrawer");
class Canvas {
    constructor(canvas) {
        this._canvas = canvas;
        this._drawer = new CanvasDrawer_1.CanvasDrawer(canvas.getContext('2d'));
    }
    get width() {
        return this._canvas.width;
    }
    get height() {
        return this._canvas.height;
    }
    get drawer() {
        return this._drawer;
    }
    clean() {
        this._canvas.width = this._canvas.width;
    }
    draw(node) {
        node.draw(this.normalise.bind(this), this._drawer);
    }
    normalise(coordinate) {
        return {
            x: coordinate.x * this.width,
            y: coordinate.y * this.height
        };
    }
}
exports.Canvas = Canvas;
