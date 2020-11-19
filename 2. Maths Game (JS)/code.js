var correct = 0;
var score = 0;
var playing = true;

function startreset(){
    x = document.getElementById('startreset').innerHTML;
    if(x.indexOf("Start Game") != -1) {
        document.getElementById('score-value').innerHTML = 0;
        document.getElementById('startreset').innerHTML = 'Reset Game';
        document.getElementById("timeremaining").style.display = "block";
        var i = 60;
        questions();
        var counter = setInterval(function(){
            i--; 
            document.getElementById('time-value').innerHTML = i;
            if (i == 0) {
                gameover();
                clearInterval(counter);
            }
        }, 1000);
    } else {
        location.reload();
    }
}

function gameover() {
    document.getElementById('gameover').style.display = "block";
    document.getElementById('gameover').innerHTML = "<p>Game over!</p> <p>Your score is " + document.getElementById('score-value').innerHTML + ".</p>";
    playing = false;
}

function questions() {
    var a = Math.floor(Math.random()*11);
    var b = Math.floor(Math.random()*11);
    document.getElementById('question').innerHTML = a + "x" + b;
    correct = Math.floor(Math.random()*4) + 1;
    var tab = [];
    for (i = 1; i < 5; i++) {
        var c = Math.floor(Math.random()*11);
        var d = Math.floor(Math.random()*11);
        while(tab.includes(c*d) == true || c*d == a*b) {
            c = Math.floor(Math.random()*11);
            d = Math.floor(Math.random()*11);
        }
        document.getElementById('box' + i).innerHTML = c*d;
        tab [i-1] = c*d;
    }
    document.getElementById('box' + correct).innerHTML = a*b;
}

function answer(a) {
    if(playing){
        if(x.indexOf("Start Game") != -1) {
            if (document.getElementById('box' + correct).innerHTML != document.getElementById('box' + a).innerHTML) {
                document.getElementById('wrong').style.display = 'block';
                var timeout = setTimeout(function(){document.getElementById('wrong').style.display = 'none'},1000);
            } else {
                score++;
                document.getElementById('score-value').innerHTML = score;
                document.getElementById('correct').style.display = 'block';
                var timeout = setTimeout(function(){document.getElementById('correct').style.display = 'none'},1000);
                questions();
            }
        }
    }
}