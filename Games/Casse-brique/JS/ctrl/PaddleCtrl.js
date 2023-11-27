/**
 * Controller for the paddle movement.
 * It make it follow the mouse.
 */
class PaddleCtrl {

    /**
     * Display the paddle and start controlling it with the mouse.
     * @param {Paddle}  paddle  :   the paddle 
     * @param {View}    view    :   the view
     */
    constructor(game, view) {
        view.displayPaddle(game.getPaddle());
        $(document).mousemove((evt) => this.moveMouse(game.getPaddle(), view, evt));
    }

    /**
     * Called when the mouse is moved.
     * It moves the paddle (horizontally) where the mouse is.
     * @param {Paddle}      paddle  : the paddle 
     * @param {View}        view    : the view
     * @param {MouseEvent}  evt     : the mouse event
     */
    moveMouse(paddle, view, evt) {
        paddle.moveTo(evt.clientX - view.sceneLeft() - 48);
        view.displayPaddle(paddle);
        console.log(paddle);
    }
}
