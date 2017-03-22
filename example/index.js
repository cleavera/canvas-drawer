/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Square_1 = __webpack_require__(1);
	var index_1 = __webpack_require__(2);
	var Circle_1 = __webpack_require__(7);
	var Line_1 = __webpack_require__(8);
	var Text_1 = __webpack_require__(9);
	var canvasEle = document.querySelector('canvas');
	var drawSpace = new index_1.Canvas(canvasEle);
	drawSpace.draw(new Square_1.Square({ x: 0.1, y: 0.1 }, 0.1, '#339933'));
	drawSpace.draw(new Circle_1.Circle({ x: 0.4, y: 0.4 }, 10, '#993333'));
	drawSpace.draw(new Line_1.Line({ x: 0.9, y: 0.7 }, { x: 0.7, y: 0.9 }, 5, '#333399'));
	drawSpace.draw(new Text_1.Text({ x: 0.6, y: 0.6 }, 'Example', '#333333'));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var index_1 = __webpack_require__(2);
	var Square = (function () {
	    function Square(position, size, colour) {
	        this.position = position;
	        this.size = size;
	        this.colour = index_1.Colour.fromHex(colour);
	    }
	    Square.prototype.draw = function (normaliser, drawer) {
	        drawer.rectangle(normaliser(this.position), normaliser({ x: this.position.x + this.size, y: this.position.y + this.size }), this.colour, 1, this.colour);
	    };
	    return Square;
	}());
	exports.Square = Square;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Canvas_1 = __webpack_require__(3);
	exports.Canvas = Canvas_1.Canvas;
	var Colour_1 = __webpack_require__(6);
	exports.Colour = Colour_1.Colour;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var CanvasDrawer_1 = __webpack_require__(4);
	var Canvas = (function () {
	    function Canvas(canvas) {
	        this._canvas = canvas;
	        this._drawer = new CanvasDrawer_1.CanvasDrawer(canvas.getContext('2d'));
	    }
	    Object.defineProperty(Canvas.prototype, "width", {
	        get: function () {
	            return this._canvas.width;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Canvas.prototype, "height", {
	        get: function () {
	            return this._canvas.height;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Canvas.prototype, "drawer", {
	        get: function () {
	            return this._drawer;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Canvas.prototype.clean = function () {
	        this._canvas.width = this._canvas.width;
	    };
	    Canvas.prototype.draw = function (node) {
	        node.draw(this.normalise.bind(this), this._drawer);
	    };
	    Canvas.prototype.normalise = function (coordinate) {
	        return {
	            x: coordinate.x * this.width,
	            y: coordinate.y * this.height
	        };
	    };
	    return Canvas;
	}());
	exports.Canvas = Canvas;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Angle_1 = __webpack_require__(5);
	var Colour_1 = __webpack_require__(6);
	var CanvasDrawer = (function () {
	    function CanvasDrawer(canvasContext) {
	        this._context = canvasContext;
	    }
	    CanvasDrawer.prototype.circle = function (position, colour, radius, strokeWidth, strokeStyle) {
	        var context = this._context;
	        context.beginPath();
	        context.arc(position.x, position.y, radius, 0, Angle_1.Angle.fromDegrees(360).radians);
	        context.fillStyle = colour.hex;
	        context.fill();
	        context.lineWidth = strokeWidth;
	        context.strokeStyle = strokeStyle.hex;
	        context.stroke();
	        context.closePath();
	    };
	    CanvasDrawer.prototype.rectangle = function (topLeft, bottomRight, colour, strokeWidth, strokeStyle) {
	        var context = this._context;
	        context.fillStyle = colour.hex;
	        context.fillRect(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);
	        context.lineWidth = strokeWidth;
	        context.strokeStyle = strokeStyle.hex;
	        context.strokeRect(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);
	    };
	    CanvasDrawer.prototype.line = function (start, end, colour, strokeWidth) {
	        var context = this._context;
	        context.beginPath();
	        context.lineWidth = strokeWidth;
	        context.strokeStyle = colour.hex;
	        context.moveTo(start.x, start.y);
	        context.lineTo(end.x, end.y);
	        context.stroke();
	        context.closePath();
	    };
	    CanvasDrawer.prototype.text = function (position, colour, text, align, font, baseline) {
	        var context = this._context;
	        context.font = font;
	        context.fillStyle = colour.hex;
	        context.strokeStyle = Colour_1.Colour.invert(colour).hex;
	        context.lineWidth = 1;
	        context.textAlign = align;
	        context.textBaseline = baseline;
	        context.strokeText(text, position.x, position.y);
	        context.fillText(text, position.x, position.y);
	    };
	    return CanvasDrawer;
	}());
	exports.CanvasDrawer = CanvasDrawer;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Angle = (function () {
	    function Angle(percentage) {
	        this._angle = percentage;
	    }
	    Object.defineProperty(Angle.prototype, "degrees", {
	        get: function () {
	            return 360 * this._angle;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Angle.prototype, "radians", {
	        get: function () {
	            return 2 * Math.PI * this._angle;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Angle.fromDegrees = function (degrees) {
	        return new Angle(degrees / 360);
	    };
	    Angle.fromRadians = function (radians) {
	        return new Angle(radians / (2 * Math.PI));
	    };
	    return Angle;
	}());
	exports.Angle = Angle;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Colour = (function () {
	    function Colour(red, green, blue) {
	        if (!Colour.checkInRange(red) || !Colour.checkInRange(green) || !Colour.checkInRange(blue)) {
	            throw new Error("(r: " + red + ", g: " + green + ", b: " + blue + ") is not a valid colour");
	        }
	        this._r = red;
	        this._g = green;
	        this._b = blue;
	    }
	    Object.defineProperty(Colour.prototype, "r", {
	        get: function () {
	            return this._r;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Colour.prototype, "g", {
	        get: function () {
	            return this._g;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Colour.prototype, "b", {
	        get: function () {
	            return this._b;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Colour.prototype, "hex", {
	        get: function () {
	            return "#" + Colour.toHex(this._r) + Colour.toHex(this._g) + Colour.toHex(this._b);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Colour.fromRGB = function (red, green, blue) {
	        return new Colour(red, green, blue);
	    };
	    Colour.fromHex = function (code) {
	        if (code.substring(0, 1) !== '#' || (code.length !== 7 && code.length !== 4)) {
	            throw new Error(code + " is not a valid hex code");
	        }
	        code = code.substring(1);
	        var r, g, b;
	        if (code.length === 6) {
	            _a = code.match(/.{2}/g), r = _a[0], g = _a[1], b = _a[2];
	        }
	        else {
	            _c = code.split(''), r = _c[0], g = _c[1], b = _c[2];
	        }
	        return new Colour(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16));
	        var _a, _c;
	    };
	    Colour.darken = function (colour, factor) {
	        return Colour.fromRGB(Math.round(colour.r * (1 - factor)), Math.round(colour.g * (1 - factor)), Math.round(colour.b * (1 - factor)));
	    };
	    Colour.invert = function (colour) {
	        return this.fromRGB(255 - colour.r, 255 - colour.g, 255 - colour.b);
	    };
	    Colour.checkInRange = function (value) {
	        return value >= 0 && value <= 255;
	    };
	    Colour.toHex = function (value) {
	        return value.toString(16).replace(/^[0-9a-fA-F]$/, function (match) {
	            return "0" + match;
	        });
	    };
	    return Colour;
	}());
	exports.Colour = Colour;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var index_1 = __webpack_require__(2);
	var Circle = (function () {
	    function Circle(position, size, colour) {
	        this.position = position;
	        this.size = size;
	        this.colour = index_1.Colour.fromHex(colour);
	    }
	    Circle.prototype.draw = function (normaliser, drawer) {
	        drawer.circle(normaliser(this.position), this.colour, this.size, 1, this.colour);
	    };
	    return Circle;
	}());
	exports.Circle = Circle;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var index_1 = __webpack_require__(2);
	var Line = (function () {
	    function Line(start, end, width, colour) {
	        this.start = start;
	        this.end = end;
	        this.colour = index_1.Colour.fromHex(colour);
	        this.width = width;
	    }
	    Line.prototype.draw = function (normaliser, drawer) {
	        drawer.line(normaliser(this.start), normaliser(this.end), this.colour, this.width);
	    };
	    return Line;
	}());
	exports.Line = Line;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var index_1 = __webpack_require__(2);
	var Text = (function () {
	    function Text(position, text, colour) {
	        this.position = position;
	        this.text = text;
	        this.colour = index_1.Colour.fromHex(colour);
	    }
	    Text.prototype.draw = function (normaliser, drawer) {
	        drawer.text(normaliser(this.position), this.colour, this.text, 'center', '22px sans-serif', 'middle');
	    };
	    return Text;
	}());
	exports.Text = Text;


/***/ }
/******/ ]);