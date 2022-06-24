"use strict";
class circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return (Number)(Math.PI * Math.pow(this.radius, 2));
    }
}
class square {
    constructor(_lenght) {
        this._lenght = _lenght;
    }
    area() {
        return (Number)(this._lenght * this._lenght);
    }
    rumus() {
        return (Number)(4 * this._lenght);
    }
}
