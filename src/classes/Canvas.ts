import {ICanvas} from '../interfaces/ICanvas.interface';
import {ICoordinate} from '../interfaces/ICoordinate.interface';
import {IDrawable} from '../interfaces/IDrawable.interface';
import {IDrawer} from '../interfaces/IDrawer.interface';
import {IDrawSpace} from '../interfaces/IDrawSpace.interface';
import {CanvasDrawer} from './CanvasDrawer';

export class Canvas implements IDrawSpace {
    private _canvas: ICanvas;
    private _drawer: IDrawer;

    constructor(canvas: ICanvas) {
        this._canvas = canvas;
        this._drawer = new CanvasDrawer(canvas.getContext('2d'));
    }

    private get width(): number {
        return this._canvas.width;
    }

    private get height(): number {
        return this._canvas.height;
    }

    public get drawer(): IDrawer {
        return this._drawer;
    }

    public clean(): void {
        this._canvas.width = this._canvas.width;
    }

    public draw(node: IDrawable): void {
        node.draw(this.normalise.bind(this), this._drawer);
    }

    private normalise(coordinate: ICoordinate): ICoordinate {
        return {
            x: coordinate.x * this.width,
            y: coordinate.y * this.height
        };
    }
}
