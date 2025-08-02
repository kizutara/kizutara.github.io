
//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}

}
function show(pgno){ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
onepage.style.display="block"; //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
show(1);
});
page2btn.addEventListener("click", function () {
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});
hideall();


var audio = document.getElementById("myAudio"); 
var audioWrong = document.getElementById("myAudio2"); 

const teleId = document.getElementById("teleId");
const teleId2 = document.getElementById("teleId2");
const teleId3 = document.getElementById("teleId3");
function GetRandom(min,max){
//this will select a number between min and max
return Math.round(Math.random() * (max - min)) + min;
}
//move all the teles randomly
function MoveTele() {
spawnteleInt =setInterval(teleId.classList.remove("shrink"));
teleId.style.left = GetRandom(0, 650) + "px";
teleId.style.top = GetRandom(0, 650) + "px";
teleId.classList.add("anim1");

teleId2.style.left = GetRandom(0, 650) + "px";
teleId2.style.top = GetRandom(0, 650) + "px";

teleId3.style.left = GetRandom(0, 650) + "px";
teleId3.style.top = GetRandom(0, 650) + "px";
}
moveteleItvId = setInterval(MoveTele, 1000);
const scoreBox=document.getElementById("scoreBox");
var score=0;

function Catch() {
//increases score after clicking
teleId.classList.add("shrink",2000);
score++;
//update html scorebox
scoreBox.innerHTML = "Score: " + score;
teleId.classList.add("anim1");
}

function CatchWrong() {
score--;
//update html scorebox
scoreBox.innerHTML = "Score: " + score;
}


function playAudio() { 
  audio.play(); 
} 

function playAudio2() { 
  audioWrong.play(); 
} 


const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");
btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);
function enterFullscreen() { //must be called by user generated event
document.documentElement.requestFullscreen();
}
function exitFullscreen() {
document.exitFullscreen();
}

teleId.addEventListener("click",Catch);
teleId2.addEventListener("click",CatchWrong);
teleId3.addEventListener("click",CatchWrong);