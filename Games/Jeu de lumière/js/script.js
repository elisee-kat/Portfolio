function random() {
    return Math.floor(Math.random() * (3 - 1 + 1)) +1;
}

function changeColor(id){
    if (random() == 1) {
        document.getElementById(id).style.color = "red";
    }else if(random() == 2){
        document.getElementById(id).style.color = "blue";
    }else if(random() == 3){
        document.getElementById(id).style.color = "green";
    }
}