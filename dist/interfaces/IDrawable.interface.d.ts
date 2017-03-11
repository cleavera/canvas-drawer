import { ICoordinate } from './ICoordinate.interface';
import { IDrawer } from './IDrawer.interface';
export interface IDrawable {
    draw(normaliser: (coordinate: ICoordinate) => ICoordinate, drawer: IDrawer): void;
}
