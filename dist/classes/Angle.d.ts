import { IAngle } from '../interfaces/IAngle.interface';
export declare class Angle implements IAngle {
    private _angle;
    constructor(percentage: number);
    readonly degrees: number;
    readonly radians: number;
    static fromDegrees(degrees: number): Angle;
    static fromRadians(radians: number): Angle;
}
