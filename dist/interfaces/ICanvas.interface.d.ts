import { I2dRenderingContext } from './I2dRenderingContext.interface';
export interface ICanvas {
    height: number;
    width: number;
    getContext(context: string): I2dRenderingContext;
}
