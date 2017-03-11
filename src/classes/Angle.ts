import {IAngle} from '../interfaces/IAngle.interface';

export class Angle implements IAngle {
    private _angle: number;

    constructor(percentage: number) {
        this._angle = percentage;
    }

    get degrees(): number {
        return 360 * this._angle;
    }

    get radians(): number {
        return 2 * Math.PI * this._angle;
    }

    public static fromDegrees(degrees: number): Angle {
        return new Angle(degrees / 360);
    }

    public static fromRadians(radians: number): Angle {
        return new Angle(radians / (2 * Math.PI));
    }
}
