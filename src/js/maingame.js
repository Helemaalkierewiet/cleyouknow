import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Scene } from "excalibur"
import { Car } from './car.js'
import { Resources, ResourceLoader } from './resources.js'
import { Truck } from './truck.js'
import { Player } from './Player.js'
import { Background } from './background.js'
import { GameOverScene } from './end.js'
import { ScoreLabel } from './score.js'

export class MainGame extends Scene {



    addPoints(points) {
        this.score += points
        //reference uiclass with scorelabel to connect gamescore with the scorelabel
    }
    



    
    onActivate() {


        console.log("start de game!")
        
        //score
        this.score = 0;
        this.scoreLabel = new ScoreLabel(this.score)
        console.log('GANGSHIT scorelabel')
        this.add(this.scoreLabel)
        
        this.addPoints(1);
        
        //background
        const bg = new Background()
        this.add(bg)

        //CARS
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.add(new Car(540, 0))
            }, i * 1500);
        }

        //TRUCK
        const truck = new Truck()
        truck.pos = new Vector(580, 200)
        this.add(truck)


        //PLAYER
        const player = new Player()
        player.pos = new Vector(400, 800)
        this.add(player)

        

        player.on('collisionstart', (event) => {
            if (event.other instanceof Car || event.other instanceof Truck) {
                this.engine.gameOver();
                
                for (const actor of this.actors) {
                    actor.kill();
                }
                   
                
            }
        });

    }

    
    
    
}


