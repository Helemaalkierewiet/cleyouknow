import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Bg: new ImageSource('images/bg1.png', { wrapping: ImageWrapping.Repeat}),
    Car: new ImageSource('images/car.png'),
    Truck: new ImageSource('images/truck.png'),
    CharacterDown: new ImageSource('images/Character_Down.png'),
    CharacterDownLeft: new ImageSource('images/Character_DownLeft.png'),
    CharacterDownRight: new ImageSource('images/Character_DownRight.png'),
    CharacterLeft: new ImageSource('images/Character_Left.png'),
    CharacterRight: new ImageSource('images/Character_Right.png'),
    CharacterUp: new ImageSource('images/Character_Up.png'),
    CharacterUpLeft: new ImageSource('images/Character_UpLeft.png'),
    CharacterUpRight: new ImageSource('images/Character_UpRight.png'),
    Bierbottle: new ImageSource('images/bierbottle.png'),
    
    
    
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }