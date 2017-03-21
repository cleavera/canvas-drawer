import {ICanvas} from './ICanvas';
import {Square} from './Square';
import {Canvas} from '../../dist/index';
import {Circle} from "./Circle";
import {Line} from "./Line";
import {Text} from "./Text";

let canvasEle = document.querySelector('canvas');
let drawSpace = new Canvas(canvasEle as ICanvas);

drawSpace.draw(new Square({x: 0.1, y: 0.1}, 0.1, '#339933'));
drawSpace.draw(new Circle({x: 0.4, y: 0.4}, 10, '#993333'));
drawSpace.draw(new Line({x: 0.9, y: 0.7}, {x: 0.7, y: 0.9}, 5, '#333399'));
drawSpace.draw(new Text({x: 0.6, y: 0.6}, 'Example', '#333333'));
