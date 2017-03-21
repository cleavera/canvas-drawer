import {IColour} from "./IColour";
import {IDrawer} from "./IDrawer";
import {IPosition} from './IPosition';
import {Colour} from '../../dist/index';

export class Square {
    position: IPosition;
    colour: IColour;
    size: number;

    constructor(position: IPosition, size: number, colour: string) {
        this.position = position;
        this.size = size;
        this.colour = Colour.fromHex(colour);
    }

    draw(normaliser: (coordinate: IPosition) => IPosition, drawer: IDrawer) {
        drawer.rectangle(normaliser(this.position), normaliser({ x: this.position.x + this.size, y: this.position.y + this.size }), this.colour, 1, this.colour);
    }
}