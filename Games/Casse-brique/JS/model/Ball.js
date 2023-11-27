class Ball{
    constructor(position, movement){
        this.topLeft = position;
        this.movement = movement;
    }

    getPosition(){
        return this.topLeft;
    }

    getMovement(){
        return this.movement;
    }

    move(){
        let x = this.topLeft.getX() + this.movement.getDeltaX();
        let y = this.topLeft.getY() + this.movement.getDeltaY();
        this.topLeft.setX(x);
        this.topLeft.setY(y);
        
        if (x < -1 || x > 935) {
            this.movement.reverseX();
        }
        if (y < -1 || y > 575) {
            this.movement.reverseY();
        }


    }
}
