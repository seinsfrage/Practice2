document.getElementById("grow").addEventListener("click", function(){

    document.getElementById("box").style.height = "300px";

});

document.getElementById("blue").addEventListener("click", function(){

    document.getElementById("box").style.background = "blue";

});


document.getElementById("fade").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "0.4";

});

document.getElementById("reset").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";

});

document.getElementById("reset").addEventListener("click", function(){

    document.getElementById("box").style.background = "orange";

});

document.getElementById("reset").addEventListener("click", function(){

    document.getElementById("box").style.opacity = "1";

});