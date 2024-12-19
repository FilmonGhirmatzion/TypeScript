import { Shape } from "./Shape";
import { Circle } from "./Circle";  
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(20, 25, 30);
let myRectangle = new Rectangle(35, 45, 40, 45);


let theShapes: Shape[] = [];    

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let aShape of theShapes) {
    console.log(aShape.getInfo());
}

