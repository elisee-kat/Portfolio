class Game {
    constructor() {
        this.paddle = new Paddle(450    );
        this.ball = new Ball(new Position(485, 563), new Movement(3, -2));
    }

    getPaddle() {
        return this.paddle;
    }

    getBall() {
        return this.ball;
    }

    paddleMove(centerX) {
        if (centerX >= -50 && centerX <= 900) {
            this.paddle = centerX;
        }
    }




    //Code à revoir à tout prix !!!!!
    
    /**
     * Si la balle touche la raquette alors on fait un reverse y, 
     * sinon ball.move()
     */
    ballMove() {
        
        if (this.ball.getPosition().getY() - 15 > 559 && (this.ball.getPosition().getX() - 15 > this.paddle.getLeft() - 1 || this.ball.getPosition().getX() - 40 < this.paddle.getLeft() + 97)) {
            this.ball.getMovement().reverseY();
            this.ball.move();
        } else {
            alert("touché");
            this.ball.move();
        }

    }
}