function initGrid() {
    document.getElementById('board').innerHTML += "";
    for (let lg = 0; lg < grid.length; lg++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[lg][col] == 1) {
                document.getElementById('board').innerHTML += '<div class="case" onclick="changeColor()"></div>';
            }
        }
        document.getElementById('board').innerHTML += '<br>';
    }
}

function changeColor() {
    document.getElementsByClassName('case').style.backgroundColor = "black";
}

