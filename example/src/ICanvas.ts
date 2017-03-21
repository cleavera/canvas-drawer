import {I2dRenderingContext} from './I2dRenderingContext';

export interface ICanvas {
    height: number;
    width: number;
    getContext(context: string): I2dRenderingContext;
}
