import { IDrawable } from './IDrawable.interface';
import { IDrawer } from './IDrawer.interface';
export interface IDrawSpace {
    drawer: IDrawer;
    clean(): void;
    draw(node: IDrawable): void;
}
