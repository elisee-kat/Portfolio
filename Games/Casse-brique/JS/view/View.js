class View{
    constructor(){};

    displayPaddle(paddle){
        document.getElementById("paddle").style.left = paddle.getLeft() + "px";    
    }

    displayBall(ball){
        document.getElementById("ball").style.left = ball.getPosition().getX() + "px"; 
        document.getElementById("ball").style.top = ball.getPosition().getY() + "px";
    }
    
    sceneLeft(){
        let variable = $("#scène").offset().left;
        return variable;
    }

    
}
