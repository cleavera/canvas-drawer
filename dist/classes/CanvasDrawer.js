"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Angle_1 = require("./Angle");
const Colour_1 = require("./Colour");
class CanvasDrawer {
    constructor(canvasContext) {
        this._context = canvasContext;
    }
    circle(position, colour, radius, strokeWidth, strokeStyle) {
        let context = this._context;
        context.beginPath();
        context.arc(position.x, position.y, radius, 0, Angle_1.Angle.fromDegrees(360).radians);
        context.fillStyle = colour.hex;
        context.fill();
        context.lineWidth = strokeWidth;
        context.strokeStyle = strokeStyle.hex;
        context.stroke();
    }
    rectangle(topLeft, bottomRight, colour, strokeWidth, strokeStyle) {
        let context = this._context;
        context.rect(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);
        context.fillStyle = colour.hex;
        context.fill();
        context.lineWidth = strokeWidth;
        context.strokeStyle = strokeStyle.hex;
        context.stroke();
    }
    line(start, end, colour, strokeWidth) {
        let context = this._context;
        context.beginPath();
        context.lineWidth = strokeWidth;
        context.strokeStyle = colour.hex;
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.stroke();
    }
    text(position, colour, text, align, font, baseline) {
        let context = this._context;
        context.font = font;
        context.fillStyle = colour.hex;
        context.strokeStyle = Colour_1.Colour.invert(colour).hex;
        context.lineWidth = 1;
        context.textAlign = align;
        context.textBaseline = baseline;
        context.strokeText(text, position.x, position.y);
        context.fillText(text, position.x, position.y);
    }
}
exports.CanvasDrawer = CanvasDrawer;
