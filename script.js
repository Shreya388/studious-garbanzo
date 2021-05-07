function changeSentence(){
    document.getElementById("demo").innerHTML = "what up";
    alert("it worked :)");
}

function makeBlue(){
    document.body.style.backgroundColor = "blue";
}

function makeBlack(){
    document.body.style.backgroundColor = "black";
}


/*math.random implimentation*/
function myFunction() {
  return Math.random();
}

document.getElementById("demo").innerHTML = myFunction();
