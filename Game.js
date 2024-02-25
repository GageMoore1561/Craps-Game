function play_game(){
//(Random numbers for dice1 and dice2)
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
//(Adds dice1 and dice2)
    var sum = dice1+dice2;
    

//(if, if-else, else to show if you rolled winning numbers or not or you need to roll agian)
    if (sum == 7 || sum == 11){
        document.getElementById("outcome").innerHTML = ('You Won!');
    }
    else if (dice1 == dice2 && dice1%dice2 == 0){
        document.getElementById("outcome").innerHTML = ("You lose!");
    }
    else {
        document.getElementById("outcome").innerHTML = ("You Pushed!");
    }
    
}

document.getElementById("Numbers").innerHTML = sum ;