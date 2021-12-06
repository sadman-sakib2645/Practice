// get eliments from html

var input = document.getElementById("input")
var total = document.getElementById("total")
var remaining = document.getElementById("remaining")



// create a funstion


function totalChar(){
    var totalinput = input.value.length;
    total.innerHTML = totalinput ;
    var remain = 500 - totalinput ;
    remaining.innerHTML = remain;
}

