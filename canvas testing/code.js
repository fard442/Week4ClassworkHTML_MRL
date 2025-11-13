function onKeyPressed(event){
    console.log(event.key);
}
document.addEventListener("keydown", onKeyPressed);
let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

const wood = document.getElementById("wood");
pencil.drawImage(wood, 0, 0, 300, 300);
