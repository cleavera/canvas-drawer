import {IColour} from "./IColour";
import {IDrawer} from "./IDrawer";
import {IPosition} from './IPosition';
import {Colour} from '../../dist/index';

export class Circle {
    position: IPosition;
    colour: IColour;
    size: number;

    constructor(position: IPosition, size: number, colour: string) {
        this.position = position;
        this.size = size;
        this.colour = Colour.fromHex(colour);
    }

    draw(normaliser: (coordinate: IPosition) => IPosition, drawer: IDrawer) {
        drawer.circle(normaliser(this.position), this.colour, this.size, 1, this.colour);
    }
}