class GameCtrl{
    constructor(game, view){
        this._game = game;
        this._view = view;
        this.paddleCtrl = new PaddleCtrl(this._game, this._view);
        this.ballCtrl = new BallCtrl(this._game, this._view);
    }

    play(){
        this.ballCtrl.start();
    }

    stop(){
        this.ballCtrl.stop();
    }
}