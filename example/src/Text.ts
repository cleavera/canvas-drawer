import {IColour} from "./IColour";
import {IDrawer} from "./IDrawer";
import {IPosition} from './IPosition';
import {Colour} from '../../dist/index';

export class Text {
    position: IPosition;
    colour: IColour;
    text: string;

    constructor(position: IPosition, text: string, colour: string) {
        this.position = position;
        this.text = text;
        this.colour = Colour.fromHex(colour);
    }

    draw(normaliser: (coordinate: IPosition) => IPosition, drawer: IDrawer) {
        drawer.text(normaliser(this.position), this.colour, this.text, 'center', '22px sans-serif', 'middle');
    }
}