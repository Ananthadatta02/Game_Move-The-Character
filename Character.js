var horMove = 0;
var verMove = 0;
var charId = document.getElementById("char");
var imag = document.getElementById("image");
document.addEventListener("keydown",function(val){
    if(val.key.toLowerCase()=="d"){
        horMove+=20;
        imag.style.transform = "rotate(0deg)"; //Face Right
        if(horMove<=1540){
            charId.style.transform = `translate(${horMove}px,${verMove}px)`
            charId.style.transition = "transform 0.2s"
        }
        else{
            horMove = -60;
            imag.style.transform = "rotate(180deg)"; //Face Left
            charId.style.transform = `translate(${horMove}px,${verMove}px)`
            charId.style.transition = "none"
        }
    }
    else if(val.key.toLowerCase()=="a"){
        // charId.style.backgroundImage = `url(../../asset/image/running left gif.gif)`
        horMove-=20;
        imag.style.transform = "scaleX(-1)"; //Face Left
        if(horMove>=-60){
            charId.style.transform = `translate(${horMove}px,${verMove}px)`
            charId.style.transition = "transform 0.2s"
        }
        else{
            horMove = 1540;
            charId.style.transform = `translate(${horMove}px,${verMove}px)`
            charId.style.transition = "none"
        }
    }
    else if(val.key.toLowerCase()=="w"){
        verMove-=20;
        imag.style.transform = "rotate(-90deg)"; //Face Down
        if(verMove>=-65){
            charId.style.transform = `translate(${horMove}px,${verMove}px)`
            charId.style.transition = "transform 0.2s"
        }
        else{
            verMove = 750;
            charId.style.transform = `translate(${horMove}px,${verMove}px)`
            charId.style.transition = "none"
        }
    }
    else if(val.key.toLowerCase()=="s"){
        verMove+=20;
        imag.style.transform = "rotate(90deg)"; //Face Down
        if(verMove<=750){
            charId.style.transform = `translate(${horMove}px,${verMove}px)`
            charId.style.transition = "transform 0.2s"
        }
        else{
            verMove = -60;
            charId.style.transform = `translate(${horMove}px,${verMove}px)`
            charId.style.transition = "none"
        }
    }
    else{
        console.log("Click Proper Key..");
    }
})