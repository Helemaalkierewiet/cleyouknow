import { Actor, Sprite, Vector } from 'excalibur';
import { Resources } from './resources';

export class Background extends Actor {
    
    sprite

    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.Bg,
            
           
    })
        this.anchor = Vector.Zero;
        this.graphics.use(this.sprite);
        this.scale = new Vector(engine.drawWidth / this.sprite.width, 1);
        this.pos = new Vector(1, engine.drawHeight - this.sprite.height);

        
    }

    onPostUpdate(engine, delta) {
      
        this.sprite.sourceView.y -= .50 * delta;
      
       
    }
}