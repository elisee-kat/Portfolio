class Movement {

    constructor(deltaX, deltaY) {
        this._deltaX = deltaX;
        this._deltaY = deltaY;
    }

    getDeltaX() {
        return this._deltaX;
    }

    getDeltaY() {
        return this._deltaY;
    }

    setDeltaX(newDeltaX) {
        this._deltaX = newDeltaX;
    }

    setDeltaY(newDeltaY) {
        this._deltaY = newDeltaY;
    }

    reverseX(){
        this._deltaX = this._deltaX * (- 1);
    }   

    reverseY(){
        this._deltaY = this._deltaY * (- 1);
    }

}
