"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Colour {
    constructor(red, green, blue) {
        if (!Colour.checkInRange(red) || !Colour.checkInRange(green) || !Colour.checkInRange(blue)) {
            throw new Error(`(r: ${red}, g: ${green}, b: ${blue}) is not a valid colour`);
        }
        this._r = red;
        this._g = green;
        this._b = blue;
    }
    get r() {
        return this._r;
    }
    get g() {
        return this._g;
    }
    get b() {
        return this._b;
    }
    get hex() {
        return `#${Colour.toHex(this._r)}${Colour.toHex(this._g)}${Colour.toHex(this._b)}`;
    }
    static fromRGB(red, green, blue) {
        return new Colour(red, green, blue);
    }
    static fromHex(code) {
        if (code.substring(0, 1) !== '#' || (code.length !== 7 && code.length !== 4)) {
            throw new Error(`${code} is not a valid hex code`);
        }
        code = code.substring(1);
        let r, g, b;
        if (code.length === 6) {
            [r, g, b] = code.match(/.{2}/g);
        }
        else {
            [r, g, b] = code.split('');
        }
        return new Colour(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16));
    }
    static darken(colour, factor) {
        return Colour.fromRGB(Math.round(colour.r * (1 - factor)), Math.round(colour.g * (1 - factor)), Math.round(colour.b * (1 - factor)));
    }
    static invert(colour) {
        return this.fromRGB(255 - colour.r, 255 - colour.g, 255 - colour.b);
    }
    static checkInRange(value) {
        return value >= 0 && value <= 255;
    }
    static toHex(value) {
        return value.toString(16).replace(/^[0-9a-fA-F]$/, (match) => {
            return `0${match}`;
        });
    }
}
exports.Colour = Colour;
