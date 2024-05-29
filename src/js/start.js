import { Scene, Label, Vector, TextAlign, BaseAlign, Color, Font } from 'excalibur';

export class StartScene extends Scene {
    constructor(engine) {
        super();

        let label = new Label({
            text: 'HIGHWAY HOPPER',
            pos: new Vector(100, 100),
            font: new Font({
                color: Color.White,
                family: 'impact',
                size: 120,
                
            })
        })

     
        
        
        const GoToGame = new Label({
            text: 'Start Game',
            pos: new Vector(500, 400),
            font: new Font({
                family: 'bold',
                size: 80,
                
            }),
            color: Color.White
        });

        GoToGame.on('pointerup', () => {
            // Restart the game
            engine.goToScene('MainGame');
            
        });
        
        this.add(label);
        this.add(GoToGame);
    }
    
}