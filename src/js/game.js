import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Car } from './car.js'
import { Resources, ResourceLoader } from './resources.js'
import { Truck } from './truck.js'
import { Player } from './Player.js'
import { Background } from './background.js'
import { GameOverScene } from './end.js'
import { MainGame } from './maingame.js'
import { StartScene } from './start.js'

export class Game extends Engine {
    ui;

  
    
    resetGame() {

        this.goToScene('MainGame');
      
    }

    constructor() {
        super({ 
            width: 980,
            height: 1020,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })

    



        this.add('MainGame', new MainGame());
        this.add('gameOver', new GameOverScene(this));
        this.add('StartScene', new StartScene(this));

        

        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.goToScene('StartScene');
    }
    

}

new Game()
