import { Actor, Engine, Vector } from "excalibur"
import { Resources } from './resources'
import { Vehicle } from './vehicle'

export class Car extends Vehicle {
    constructor(x, y) {
        super()
        this.pos = new Vector(x, y);
}
onInitialize(engine) {
    let sprite = Resources.Car.toSprite();
    sprite.scale = new Vector(0.1, 0.1); // Scale the sprite to 50% of its original size
    this.graphics.use(sprite);
    
   
   
    
    
    
}


}