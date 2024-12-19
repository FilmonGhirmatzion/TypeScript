import { Shape } from './Shape';

// Circle class is derived from Shape class
export class Circle extends Shape {
    
    constructor(_x: number, _y: number, private _radius: number) {
        super(_x, _y);
    }

    getInfo(): string {
        return `${super.getInfo()}, radius=${this._radius}`;
    }
}