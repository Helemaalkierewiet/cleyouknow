import { Scene, Label, Vector, TextAlign, BaseAlign, Color, Font, FontUnit } from 'excalibur';


export class GameOverScene extends Scene {
    finalScoreLabel;
    highScoreLabel;

    constructor(engine) {
        super();

        this.engine = engine;

        // const finalScore = 0; 


    //    let finalScore = engine.score;
        
    }

    onActivate(ctx, engine) {
        console.log(ctx.data);
        const finalScore = ctx.data;

        const storedHighScore = localStorage.getItem('highScore');
        let highScore;

        if (storedHighScore) {
            highScore = parseInt(storedHighScore);
        } else {
            highScore = 0;
        }

        this.finalScoreLabel = new Label({
            text: `Your Score: ${finalScore.toString()}`,
            pos: new Vector(100, 800),
            color: Color.Red,
            font: new Font({
                size: 100,
                
                family: "Arial"
            })
        });

        this.highScoreLabel = new Label({
            text: highScore.toString(),
            pos: new Vector(1000, 925),
            color: Color.White,
            font: new Font({
                size: 75,
                
                family: "Arial"
            })
        });

        if (finalScore > highScore) {
            localStorage.setItem('highScore', JSON.stringify(finalScore));
            this.highScoreLabel.text = finalScore.toString();
        }

        this.highScoreLabel = new Label({
            text: 'highscore: ' + highScore.toString(),
            pos: new Vector(100, 600),
            color: Color.Yellow,
            font: new Font({
                size: 75,
                
                family: "Arial"
            })
        });





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

            this.remove(label);
            this.remove(tryAgainButton);
            this.remove(this.finalScoreLabel);
            this.remove(this.highScoreLabel);
            // Restart the game
            this.engine.resetGame();
            
        });
        
        this.add(label);
        this.add(tryAgainButton);
        this.add(this.finalScoreLabel);
        this.add(this.highScoreLabel);
    }
}