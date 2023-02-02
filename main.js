// tady je místo pro náš program

//Písmo v odstavci po najetí myši ztuční
let odstavec = document.querySelector(".mujOdstavec");
odstavec.style.fontSize = "16px";

function mouseOut() {
    document.querySelector(".mujOdstavec").style.fontSize = "larger";
    odstavec.style.fontWeight = "bold";
}

//“červené po kliknutí” bude odstavci přidávat červené písmo

function myFunction() {
    document.querySelector(".mujOdstavec").style.color = "red";
}

//větší po kliknutí” 

x = 1;
document.querySelector("#ptlacitko").addEventListener("click", function () {
    increseText();
})

function increseText() {
    x++;
    document.querySelector(".mujOdstavec").style.fontSize = x + 'px';
    console.log(x)
}

//prehravac 

let prehravac = document.querySelector(".mujPrehravac");
function spustAudio() {
    prehravac.play();
};

function zastavtAudio() {
    prehravac.pause();
};

function resetAudio() {
    prehravac.currentTime = 0;
};
