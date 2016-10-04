
$(document).ready(function(){
    console.log("JavaScript Hooked Up");

//GLOBAL VARIABLES

var target1 = $('#target1');
var target2 = $('#target2');
var target3 = $('#target3');
var target4 = $('#target4');
var target5 = $('#target5');
var target6 = $('#target6');
var target7 = $('#target7');
var target8 = $('#target8');
var target9 = $('#target9');
var target10 = $('#target10');
var target11 = $('#target11');
var target12 = $('#target12');

//Click Event for Each Clown
//number is determined in HTML div ID
//.one only lets you click once
target1.one('click', function(){
  //when clicked remove image of clown, this determines its been hit
    console.log("HIT! #1");
    target1.css({
      border: '3px solid white',
      color: 'white'
    });;
  })
target2.one('click', function(){
    console.log("HIT! #2");
    target2.css({
      border: '3px solid white',
      color: 'white'
    });;
  })
target3.one('click', function(){
    console.log("HIT! #3");
    target3.css({
      border: '3px solid white',
      color: 'white'
    });;
  })
$("#target4").one('click', function(){
    console.log("HIT! #4");
    target4.css({
      border: '3px solid white',
      color: 'white'
    });;
  })
$("#target5").one('click', function(){
    console.log("HIT! #5");
    target5.css({
      border: '3px solid white',
      color: 'white'
    });;
  })

// timer function when 00:00 STOP game
/*
function CountDown() {

}
*/


// reset functions for when game is over

//music on and off function
// https://www.youtube.com/watch?v=51rg0Gh8LaM


//mouse hover over body




































 })

