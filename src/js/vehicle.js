import { Actor, Vector } from 'excalibur';

export class Vehicle extends Actor {
    constructor() {
        super({ width: 100, height: 100 });
        console.log("ik ben een VEHICLE");

        this.vel = new Vector(0, Math.random()*10+700);
        this.on('exitviewport', () => this.resetPosition());
    }

    spawn(x, y) {
        this.pos = new Vector(x, y);
    }

    resetPosition() {
        this.pos.x = Math.random() * (820 - 200) + 180;
        this.pos.y = 0;
    }
}