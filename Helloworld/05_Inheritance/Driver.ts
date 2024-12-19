import { Shape } from "./Shape";
import { Circle } from "./Circle";  
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(20, 25, 30);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(35, 45, 40, 45);
console.log(myRectangle.getInfo());