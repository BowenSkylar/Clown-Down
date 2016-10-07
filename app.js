$(document).ready(function(){
    console.log("JavaScript Hooked Up");


//GLOBAL VARIABLES OF CLOWNS

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
var target13 = $('#target13');



////////////
var targets = {target1, target2, target3, target5, target6, target7,
target8, target9, target10, target11, target12, target13};

var clownImages = [];

//establish function to remove all repeated code
$('.clown').one('click', function shootClown(e){
    console.log("HIT!  " + $(this));

    //change photo to redx
    $(this).css({'background-image': 'url("images/redx.png")', 'background-repeat' : 'no-repeat' , 'background-size' : '12vw 23vh' });
    // get score
    //increment score by one
    var span = $('#score');
    var spanValue = $('#score').html();
    var currentScore = parseInt(spanValue);
    var clownDownIncreaseOne = parseInt(currentScore) + 1;
    span.html(clownDownIncreaseOne);
})





//timer function
function CountDown() {
  var clock = $('#clock');
  var clockString = $('#clock').html();
  var clockInt = parseInt(clockString);
  var decreasedClock = (clockInt - 1 );

// stop when hits 0
  if (clockInt > 0 ){
    var timeDescend = clock.html("0" +decreasedClock);
  } else{
    clearInterval(countDownInterval);
    alert("TIMES UP!!!");
  }
}


 countDownInterval = setInterval(CountDown, 1000);



//WHEN SCORE = 13 SHUFFLE CLOWNS! FOR NEXT ROUND & RESTART BOARD



//add empty clowns?


// timer function when 0 seconds on clock =  STOP game



//music on and off function?
// https://www.youtube.com/watch?v=51rg0Gh8LaM


//randomize clowns when page starts



});




var countDownInterval;



























