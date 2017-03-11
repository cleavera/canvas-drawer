"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Angle {
    constructor(percentage) {
        this._angle = percentage;
    }
    get degrees() {
        return 360 * this._angle;
    }
    get radians() {
        return 2 * Math.PI * this._angle;
    }
    static fromDegrees(degrees) {
        return new Angle(degrees / 360);
    }
    static fromRadians(radians) {
        return new Angle(radians / (2 * Math.PI));
    }
}
exports.Angle = Angle;
