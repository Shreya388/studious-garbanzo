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

$(".black").hide();
    $(".blue").hide();

$(".changeBg").click(function(){
    $(".black").show();
    $(".blue").show();
  });

