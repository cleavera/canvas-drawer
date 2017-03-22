"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Angle_1 = require("./Angle");
var Colour_1 = require("./Colour");
var CanvasDrawer = (function () {
    function CanvasDrawer(canvasContext) {
        this._context = canvasContext;
    }
    CanvasDrawer.prototype.circle = function (position, colour, radius, strokeWidth, strokeStyle) {
        var context = this._context;
        context.beginPath();
        context.arc(position.x, position.y, radius, 0, Angle_1.Angle.fromDegrees(360).radians);
        context.fillStyle = colour.hex;
        context.fill();
        context.lineWidth = strokeWidth;
        context.strokeStyle = strokeStyle.hex;
        context.stroke();
        context.closePath();
    };
    CanvasDrawer.prototype.rectangle = function (topLeft, bottomRight, colour, strokeWidth, strokeStyle) {
        var context = this._context;
        context.fillStyle = colour.hex;
        context.fillRect(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);
        context.lineWidth = strokeWidth;
        context.strokeStyle = strokeStyle.hex;
        context.strokeRect(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);
    };
    CanvasDrawer.prototype.line = function (start, end, colour, strokeWidth) {
        var context = this._context;
        context.beginPath();
        context.lineWidth = strokeWidth;
        context.strokeStyle = colour.hex;
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.stroke();
        context.closePath();
    };
    CanvasDrawer.prototype.text = function (position, colour, text, align, font, baseline) {
        var context = this._context;
        context.font = font;
        context.fillStyle = colour.hex;
        context.strokeStyle = Colour_1.Colour.invert(colour).hex;
        context.lineWidth = 1;
        context.textAlign = align;
        context.textBaseline = baseline;
        context.strokeText(text, position.x, position.y);
        context.fillText(text, position.x, position.y);
    };
    return CanvasDrawer;
}());
exports.CanvasDrawer = CanvasDrawer;
