import { Actor, SpriteSheet, Engine, Vector, range, Keys, clamp, CollisionType } from "excalibur"
import { Vehicle } from './vehicle'
import { Resources } from './resources'
import { Animation } from 'excalibur';
import { Truck } from "./truck";
import { Car } from "./car";

export class Player extends Actor {



    
    constructor(width = 10, height = 10) {
        super({
            width: width,
            height: height,
        });
        CollisionType.Active;
        // Your code here
    }
    onInitialize(engine) {
        let sprite = Resources.CharacterUp.toSprite();
        sprite.scale = new Vector(2.1, 2.1); // Scale the sprite to 50% of its original size
        this.graphics.use(sprite);
        
        const upSheet = SpriteSheet.fromImageSource({
            image: Resources.CharacterUp,
            grid: {
                rows: 1,
                columns: 4,
                spriteWidth: 32,
                spriteHeight: 32,
            }
        });

        this.on('collisionstart', (event) => this.hitSomething(event));
        
        const upAnimation = range(0, 3);
        const idle = Animation.fromSpriteSheet(upSheet, upAnimation, 100);
        
        idle.scale = new Vector(4.1, 4.1);
        this.graphics.add("idle", idle);
        this.graphics.use("idle");
        //leftsprite
        let sprite2 = Resources.CharacterUpLeft.toSprite();
        sprite2.scale = new Vector(2.1, 2.1); // Scale the sprite to 50% of its original size
        this.graphics.use(sprite2);
        
        const leftSheet = SpriteSheet.fromImageSource({
            image: Resources.CharacterUpLeft,
            grid: {
                rows: 1,
                columns: 4,
                spriteWidth: 32,
                spriteHeight: 32,
            }
        });
        
        const upLeftAnimation = range(0, 3);
        const idle2 = Animation.fromSpriteSheet(leftSheet, upLeftAnimation, 100);
        
        idle2.scale = new Vector(4.1, 4.1);
        this.graphics.add("idle2", idle2);
        this.graphics.use("idle2");
        
        //rightsprite
        
        let sprite3 = Resources.CharacterUpRight.toSprite();
        sprite3.scale = new Vector(2.1, 2.1); // Scale the sprite to 50% of its original size
        this.graphics.use(sprite3);
        
        const rightSheet = SpriteSheet.fromImageSource({
            image: Resources.CharacterUpRight,
            grid: {
                rows: 1,
                columns: 4,
                spriteWidth: 32,
                spriteHeight: 32,
            }
        });
        
        const upRightAnimation = range(0, 3);
        const idle3 = Animation.fromSpriteSheet(rightSheet, upRightAnimation, 100);
        
        idle3.scale = new Vector(4.1, 4.1);
        this.graphics.add("idle3", idle3);
        this.graphics.use("idle3");


    }
    
    hitSomething(event) {
    
        if (event.other instanceof Vehicle) {
            console.log('DEAD');
            // location.reload();
    
            
        }
    }

    onPostUpdate(engine) {
        
        let xspeed = 0
        let yspeed = 0

        let maxSpeed = 500;

        if (this.pos.x > 800 || this.pos.x < 200) {
       
            maxSpeed = 250;
        }
        
        if (engine.input.keyboard.isHeld(Keys.W)) {
            yspeed = -maxSpeed;
            this.graphics.use("idle");
        } if (engine.input.keyboard.isHeld(Keys.S)) {
            yspeed = maxSpeed;
            this.graphics.use("idle");
        } if (engine.input.keyboard.isHeld(Keys.A)) {
            xspeed = -maxSpeed;
            this.graphics.use("idle2");
    } if (engine.input.keyboard.isHeld(Keys.D)) {
            xspeed = maxSpeed;
            this.graphics.use("idle3");
    }
    this.vel = new Vector(xspeed, yspeed);
    
    this.pos.x = clamp(this.pos.x, 0, engine.drawWidth - this.width);
    this.pos.y = clamp(this.pos.y, 0, engine.drawHeight - this.height);

   
    
}  



}
