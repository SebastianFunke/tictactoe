let fields = [];
let currentShape = 'cross';
let gameOver = false;




function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
        } else {
            currentShape = 'cross';
        }
        document.getElementById('player-1').classList.toggle('inactive');
        document.getElementById('player-2').classList.toggle('inactive');

        fields[id] = currentShape;
        console.log(fields);
        draw();
        checkForWin();
    }
}



function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }


    }
}

function checkForWin() {
    let winner;
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1) ';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1) ';
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'scaleX(1) scaleY(1) rotate(90deg)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'scaleX(1) scaleY(1) rotate(90deg)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'scaleX(1) scaleY(1) rotate(90deg)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'scaleX(1.3) scaleY(1.3) rotate(45deg)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'scaleX(1.3) scaleY(1.3) rotate(-45deg)';
    }

    if (winner) {
        console.log('winner:' + winner);
        gameOver = true;
        setTimeout(function() {
            document.getElementById('gameOver').classList.remove('d-none');
        }, 1000);
    }

}


function reset() {
    let shapes = document.getElementsByClassName('shapes');

    document.getElementById('gameOver').classList.add('d-none');
    for (let i = 0; i < shapes.length; i++) {
        shapes[i].classList.add('d-none')

    }

    document.getElementById('line-1').style.transform = 'scaleX(0) ';
    document.getElementById('line-2').style.transform = 'scaleX(0)';
    document.getElementById('line-3').style.transform = 'scaleX(0) ';
    document.getElementById('line-4').style.transform = 'scaleX(0) scaleY(0) rotate(90deg)';
    document.getElementById('line-5').style.transform = 'scaleX(0) scaleY(0) rotate(90deg)';
    document.getElementById('line-6').style.transform = 'scaleX(0) scaleY(0) rotate(90deg)';
    document.getElementById('line-7').style.transform = 'scaleX(0) scaleY(0) rotate(45deg)';
    document.getElementById('line-8').style.transform = 'scaleX(0) scaleY(0) rotate(-45deg)';

    fields = [];
    gameOver = false;
    currentShape = 'cross';
    document.getElementById('player-1').classList.remove('inactive');
    document.getElementById('player-2').classList.add('inactive');
}