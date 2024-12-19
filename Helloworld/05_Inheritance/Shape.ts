export class Shape {


    constructor(public _x: number, public _y: number) { }

    getInfo(): string {
        return `x=${this._x}, y=${this._y}`;
    }
}