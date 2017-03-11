import { ICanvas } from '../interfaces/ICanvas.interface';
import { IDrawable } from '../interfaces/IDrawable.interface';
import { IDrawer } from '../interfaces/IDrawer.interface';
import { IDrawSpace } from '../interfaces/IDrawSpace.interface';
export declare class Canvas implements IDrawSpace {
    private _canvas;
    private _drawer;
    constructor(canvas: ICanvas);
    private readonly width;
    private readonly height;
    readonly drawer: IDrawer;
    clean(): void;
    draw(node: IDrawable): void;
    private normalise(coordinate);
}
