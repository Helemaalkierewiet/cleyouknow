import { Scene, Label, Vector, TextAlign, BaseAlign, Color, Font } from 'excalibur';

export class GameOverScene extends Scene {
    constructor(engine) {
        super();

        let label = new Label({
            text: 'GAME OVER',
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 180,
                
            })
        })

     
        
        
        const tryAgainButton = new Label({
            text: 'Try Again',
            pos: new Vector(500, 400),
            font: new Font({
                family: 'bold',
                size: 80,
                
            }),
            color: Color.White
        });

        tryAgainButton.on('pointerup', () => {
            // Restart the game
            engine.resetGame();
            
        });
        
        this.add(label);
        this.add(tryAgainButton);
    }
}