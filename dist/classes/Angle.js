"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Angle = (function () {
    function Angle(percentage) {
        this._angle = percentage;
    }
    Object.defineProperty(Angle.prototype, "degrees", {
        get: function () {
            return 360 * this._angle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Angle.prototype, "radians", {
        get: function () {
            return 2 * Math.PI * this._angle;
        },
        enumerable: true,
        configurable: true
    });
    Angle.fromDegrees = function (degrees) {
        return new Angle(degrees / 360);
    };
    Angle.fromRadians = function (radians) {
        return new Angle(radians / (2 * Math.PI));
    };
    return Angle;
}());
exports.Angle = Angle;
