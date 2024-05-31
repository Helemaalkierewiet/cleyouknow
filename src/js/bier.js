import { Actor, Engine, Vector } from "excalibur"
import { Resources } from './resources'


export class Bier extends Actor {
    constructor() {
        super()
        this.pos = new Vector(50, 0);
        this.scale = new Vector(3, 2);
        
}
onInitialize(engine) {
    let sprite = Resources.Bierbottle.toSprite();
    sprite.scale = new Vector(0.1, 0.1); // Scale the sprite to 50% of its original size
    this.graphics.use(sprite);
    
   
   
    
    
    
}


}