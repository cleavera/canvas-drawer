"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Colour = (function () {
    function Colour(red, green, blue) {
        if (!Colour.checkInRange(red) || !Colour.checkInRange(green) || !Colour.checkInRange(blue)) {
            throw new Error("(r: " + red + ", g: " + green + ", b: " + blue + ") is not a valid colour");
        }
        this._r = red;
        this._g = green;
        this._b = blue;
    }
    Object.defineProperty(Colour.prototype, "r", {
        get: function () {
            return this._r;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Colour.prototype, "g", {
        get: function () {
            return this._g;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Colour.prototype, "b", {
        get: function () {
            return this._b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Colour.prototype, "hex", {
        get: function () {
            return "#" + Colour.toHex(this._r) + Colour.toHex(this._g) + Colour.toHex(this._b);
        },
        enumerable: true,
        configurable: true
    });
    Colour.fromRGB = function (red, green, blue) {
        return new Colour(red, green, blue);
    };
    Colour.fromHex = function (code) {
        if (code.substring(0, 1) !== '#' || (code.length !== 7 && code.length !== 4)) {
            throw new Error(code + " is not a valid hex code");
        }
        code = code.substring(1);
        var r, g, b;
        if (code.length === 6) {
            _a = code.match(/.{2}/g), r = _a[0], g = _a[1], b = _a[2];
        }
        else {
            _c = code.split(''), r = _c[0], g = _c[1], b = _c[2];
        }
        return new Colour(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16));
        var _a, _c;
    };
    Colour.darken = function (colour, factor) {
        return Colour.fromRGB(Math.round(colour.r * (1 - factor)), Math.round(colour.g * (1 - factor)), Math.round(colour.b * (1 - factor)));
    };
    Colour.invert = function (colour) {
        return this.fromRGB(255 - colour.r, 255 - colour.g, 255 - colour.b);
    };
    Colour.checkInRange = function (value) {
        return value >= 0 && value <= 255;
    };
    Colour.toHex = function (value) {
        return value.toString(16).replace(/^[0-9a-fA-F]$/, function (match) {
            return "0" + match;
        });
    };
    return Colour;
}());
exports.Colour = Colour;
