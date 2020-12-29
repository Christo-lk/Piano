




function highlight(){
  console.log("highlight")
}

let note; 
// note selector
// 1c,2d,3e,4f,5g,6a,7b,8c2

var pianoNotes = [];

pianoNotes[0]= new Audio();
pianoNotes[0]= pianoNotes[0].src = "c.wav";

pianoNotes[1]= new Audio();
pianoNotes[1]= pianoNotes[1].src = "d.wav";

/*
pianoNotes[2]= pianoNotes[2].src ='e1.wav';
pianoNotes[2]= new Audio();
*/

pianoNotes[3]= new Audio();
pianoNotes[3]= pianoNotes[3].src = "f.wav";

pianoNotes[4]= new Audio();
pianoNotes[4]= pianoNotes[4].src = "g.wav";

pianoNotes[5]= new Audio();
pianoNotes[5]= pianoNotes[5].src = "a.wav";

pianoNotes[6]= new Audio();
pianoNotes[6]= pianoNotes[6].src = "b.wav";

pianoNotes[7]= new Audio();
pianoNotes[7]= pianoNotes[7].src = "c2.wav";


document.onkeydown = checkKey;

function checkKey(e){

switch(e.keyCode){

   case 83: 
  console.log("C plays");    
  note = 1 
  currentNote.innerHTML= "C";  
  c = new Audio(pianoNotes[0])
  c.play();
  break;

  case 68: 
  console.log("d plays");  
  note = 2  
  currentNote.innerHTML= "D";
  d = new Audio(pianoNotes[1])
  d.play();
  break;

  case 70: console.log("e plays")
  note = 3 
  currentNote.innerHTML= "E";
  e = new Audio("e1.wav")
  e.play();
  break;
  
  case 71: console.log("f plays")
  note= 4;
  currentNote.innerHTML= "F";
  f = new Audio(pianoNotes[3])
  f.play();
  break;

  case 72: console.log("g plays")
  note = 5;
  currentNote.innerHTML= "G";
  g = new Audio(pianoNotes[4])
  g.play();
  break;

  case 74: console.log("a plays")
  note = 6;
  currentNote.innerHTML= "A";
  a = new Audio(pianoNotes[5])
  a.play();
  break;

  case 75: console.log("b plays")
  note = 7;
  currentNote.innerHTML= "B";
  b = new Audio(pianoNotes[6])
  b.play();
  break;

  case 76: console.log("c2 plays")
  note = 8;
  currentNote.innerHTML= "C";
  c2 = new Audio(pianoNotes[7])
  c2.play();
  break;

}

console.log(note)

// if else statement to toggle blue color

// C = 1
note < 2 ? document.getElementById("c").style.background = "blue":
document.getElementById("c").style.background = "gray";

//D = 2
note > 1 && note < 3 ? document.getElementById("d").style.background = "blue":
document.getElementById("d").style.background = "gray";

// E = 3
note > 2 && note < 4 ? document.getElementById("e").style.background = "blue":
document.getElementById("e").style.background = "gray";

// F = 4
note > 3 && note < 5 ? document.getElementById("f").style.background = "blue":
document.getElementById("f").style.background = "gray";

// G = 5
note > 4 && note < 6 ? document.getElementById("g").style.background = "blue":
document.getElementById("g").style.background = "gray";

// A = 6
note > 5 && note < 7 ? document.getElementById("a").style.background = "blue":
document.getElementById("a").style.background = "gray";

// B = 7
note > 6 && note < 8 ? document.getElementById("b").style.background = "blue":
document.getElementById("b").style.background = "gray";

// C = 8
note > 7 && note < 9 ? document.getElementById("c2").style.background = "blue":
document.getElementById("c2").style.background = "gray";













/*
switch(note){

  case 1: 
  console.log("switch works")
  document.getElementById("c").style.background = "blue";
  break;

  case 2:
    console.log("switch 2")
  document.getElementById("d").style.background = "blue";

*/



}







if (note < 2){
  console.log("IDEA WORKS")
}
else{ console.log("else")}

/* // onkey down / on key up change colour
window.addEventListener("onkeydown", keyDown())
window.addEventListener("onkeyup", keyUp())


function keyDown(){
  console.log("keydown")
  document.getElementById("c").style.background = "red";
}
sa
function keyUp(){
  console.log("keyup")
  document.getElementById("c").style.background = "yellow";
}
*/





