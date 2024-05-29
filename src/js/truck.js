import { Actor, Engine, Vector } from "excalibur"
import { Vehicle } from './vehicle'
import { Resources } from './resources'
import { Car } from "./car";

export class Truck extends Vehicle {

    
    
    constructor(x, y) {
        super(); 
        this.pos = new Vector(x, y);
        this.time = 0; // Initialize a time variable for the slalom movement
        this.canCollide = false;
        setTimeout(() => {
            this.canCollide = true;
        }, 150);
        
    }
    
    onInitialize(engine) {
        let sprite = Resources.Truck.toSprite();
        sprite.scale = new Vector(0.4, 0.4); // Scale the sprite to 50% of its original size
       
        this.graphics.use(sprite);
        this.on('collisionstart', (event) => this.hitSomething(event));
    }
    
    hitSomething(event) {
        if (!this.canCollide) return;
    
        
        if (event.other instanceof Car) {
            console.log('TRUCK AND CAR COLLISION');
    
            // Determine which side of the truck the car is on
            if (event.other.pos.x > this.pos.x) {
                // The car is on the right side of the truck, increase its x position
                event.other.pos.x += 30;
            } else {
                // The car is on the left side of the truck, decrease its x position
                event.other.pos.x -= 30;
            }
        }
    }
    update(engine, delta) {
        super.update(engine, delta); // Call the parent update method
        
        this.time += delta; // Increase the time variable
        this.pos.x += Math.sin(this.time / 200) * 10; // Update the x position based on a sine wave
    }
}