class BallCtrl{
    constructor(game, view){
        this._ball = game.getBall();
        this._view = view;
        view.displayBall(this._ball);
    }

    start(){
        this._moveListener = setInterval(() => this.move(), 10);
    }

    move(){
        this._ball.move();
        this._view.displayBall(this._ball);
    }

    stop(){
        clearInterval(this._moveListener);
    }
}