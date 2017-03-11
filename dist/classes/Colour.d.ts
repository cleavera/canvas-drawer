import { IColour } from '../interfaces/IColour.interface';
export declare class Colour implements IColour {
    private _r;
    private _g;
    private _b;
    private constructor(red, green, blue);
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly hex: string;
    static fromRGB(red: number, green: number, blue: number): Colour;
    static fromHex(code: string): Colour;
    static darken(colour: IColour, factor: number): Colour;
    static invert(colour: IColour): Colour;
    private static checkInRange(value);
    private static toHex(value);
}
