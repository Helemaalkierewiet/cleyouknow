import { Label, FontUnit, Font, Vector, Actor, Color } from "excalibur";

export class ScoreLabel extends Label {
    constructor(initialScore) {
        super();

        this.text = `Meters: ${initialScore}`;
        this.color = Color.Black;
        this.pos = new Vector(100, 100);
        this.font = new Font({
            size: 50,
            
            family: 'Impact',
        });
        this.z = 1000;
        this.updateScore(initialScore);
    }

    updateScore(newScore) {
        this.text = `Score: ${newScore}`;
        console.log(newScore);
       
    }
    
}

