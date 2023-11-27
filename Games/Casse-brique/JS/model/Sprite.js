class Sprite{
    constructor(topLeft, dimension){
        this.topLeft = new Position(485, 563);
        this.dimension = new Dimension(960, 600);
    }

    getTopLeft(){
        return this.topLeft;
    }

    getDimension(){
        return this.dimension;
    }
}
