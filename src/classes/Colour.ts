import {IColour} from '../interfaces/IColour.interface';

export class Colour implements IColour {
    private _r: number;
    private _g: number;
    private _b: number;

    private constructor(red: number, green: number, blue: number) {
        if (!Colour.checkInRange(red) || !Colour.checkInRange(green) || ! Colour.checkInRange(blue)) {
            throw new Error(`(r: ${red}, g: ${green}, b: ${blue}) is not a valid colour`);
        }

        this._r = red;
        this._g = green;
        this._b = blue;
    }

    get r(): number {
        return this._r;
    }

    get g(): number {
        return this._g;
    }

    get b(): number {
        return this._b;
    }

    get hex(): string {
        return `#${Colour.toHex(this._r)}${Colour.toHex(this._g)}${Colour.toHex(this._b)}`;
    }

    public static fromRGB(red: number, green: number, blue: number): Colour {
        return new Colour(red, green, blue);
    }

    public static fromHex(code: string): Colour {
        if (code.substring(0, 1) !== '#' || (code.length !== 7 && code.length !== 4)) {
            throw new Error(`${code} is not a valid hex code`);
        }

        code = code.substring(1);

        let r: string,
            g: string,
            b: string;

        if (code.length === 6) {
            [r, g, b] = code.match(/.{2}/g);
        } else {
            [r, g, b] = code.split('');
        }

        return new Colour(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16));
    }

    public static darken(colour: IColour, factor: number): Colour {
        return Colour.fromRGB(Math.round(colour.r * (1 - factor)), Math.round(colour.g * (1 - factor)), Math.round(colour.b * (1 - factor)));
    }

    public static invert(colour: IColour): Colour {
        return this.fromRGB(255 - colour.r, 255 - colour.g, 255 - colour.b);
    }

    private static checkInRange(value: number): boolean {
        return value >= 0 && value <= 255;
    }

    private static toHex(value: number): string {
        return value.toString(16).replace(/^[0-9a-fA-F]$/, (match: string) => {
            return `0${match}`;
        });
    }
}
