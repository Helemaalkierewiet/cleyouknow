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
    score = 0;
    ui;

    addPoints(points) {
        this.score += points;
        this.ui.updateScore(this.score);
        console.log('score', this.score);
    }
    
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

    

      


        const mainGame = new MainGame();

        this.add('MainGame', mainGame);
        this.add('gameOver', new GameOverScene(this));
        this.add('StartScene', new StartScene(this));

        this.goToScene('StartScene')

        this.start(ResourceLoader).then(() => mainGame.startGame())
    }

    gameOver() {
        
        this.goToScene('gameOver');
    }


    

}

new Game()
