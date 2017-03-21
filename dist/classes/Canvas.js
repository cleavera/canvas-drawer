"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CanvasDrawer_1 = require("./CanvasDrawer");
var Canvas = (function () {
    function Canvas(canvas) {
        this._canvas = canvas;
        this._drawer = new CanvasDrawer_1.CanvasDrawer(canvas.getContext('2d'));
    }
    Object.defineProperty(Canvas.prototype, "width", {
        get: function () {
            return this._canvas.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "height", {
        get: function () {
            return this._canvas.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "drawer", {
        get: function () {
            return this._drawer;
        },
        enumerable: true,
        configurable: true
    });
    Canvas.prototype.clean = function () {
        this._canvas.width = this._canvas.width;
    };
    Canvas.prototype.draw = function (node) {
        node.draw(this.normalise.bind(this), this._drawer);
    };
    Canvas.prototype.normalise = function (coordinate) {
        return {
            x: coordinate.x * this.width,
            y: coordinate.y * this.height
        };
    };
    return Canvas;
}());
exports.Canvas = Canvas;
