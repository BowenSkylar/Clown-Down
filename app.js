//clown objects
//change background image if == 13



setInterval(function() {
  var roundScore = parseInt($('#score').html());

  //when score = 13
  //when score = 26
  // if score =
  if (roundScore === 13){
    //shuffle photos
      $('.clown').css({'background-image': 'url("images/clown1.png")'});
      $('#target2').css({'background-image': 'url("images/clown2.png")'});
      $('#target3').css({'background-image': 'url("images/clown3.png")'});
      $('#target4').css({'background-image': 'url("images/clown1.png")'});
      $('#target5').css({'background-image': 'url("images/clown2.png")'});
      $('#target6').css({'background-image': 'url("images/clown3.png")'});
      $('#target7').css({'background-image': 'url("images/clown1.png")'});
      $('#target8').css({'background-image': 'url("images/clown2.png")'});
      $('#target9').css({'background-image': 'url("images/clown3.png")'});
      $('#target10').css({'background-image': 'url("images/clown1.png")'});
      $('#target11').css({'background-image': 'url("images/clown2.png")'});
      $('#target12').css({'background-image': 'url("images/clown3.png")'});
      $('#target13').css({'background-image': 'url("images/clown1.png")'});
         //reset board
  } if (roundScore === 26){
      $('.clown').css({'background-image': 'url("images/clown3.png")'});
      $('#target2').css({'background-image': 'url("images/clown2.png")'});
      $('#target3').css({'background-image': 'url("images/clown1.png")'});
      $('#target4').css({'background-image': 'url("images/clown3.png")'});
      $('#target5').css({'background-image': 'url("images/clown2.png")'});
      $('#target6').css({'background-image': 'url("images/clown1.png")'});
      $('#target7').css({'background-image': 'url("images/clown3.png")'});
      $('#target8').css({'background-image': 'url("images/clown2.png")'});
      $('#target9').css({'background-image': 'url("images/clown1.png")'});
      $('#target10').css({'background-image': 'url("images/clown3.png")'});
      $('#target11').css({'background-image': 'url("images/clown2.png")'});
      $('#target12').css({'background-image': 'url("images/clown1.png")'});
      $('#target13').css({'background-image': 'url("images/clown3.png")'});
  }if (roundScore === 39){
      $('.clown').css({'background-image': 'url("images/clown3.png")'});
      $('#target2').css({'background-image': 'url("images/clown2.png")'});
      $('#target3').css({'background-image': 'url("images/clown1.png")'});
      $('#target4').css({'background-image': 'url("images/clown3.png")'});
      $('#target5').css({'background-image': 'url("images/clown2.png")'});
      $('#target6').css({'background-image': 'url("images/clown1.png")'});
      $('#target7').css({'background-image': 'url("images/clown3.png")'});
      $('#target8').css({'background-image': 'url("images/clown2.png")'});
      $('#target9').css({'background-image': 'url("images/clown1.png")'});
      $('#target10').css({'background-image': 'url("images/clown3.png")'});
      $('#target11').css({'background-image': 'url("images/clown2.png")'});
      $('#target12').css({'background-image': 'url("images/clown1.png")'});
      $('#target13').css({'background-image': 'url("images/clown3.png")'});
  }if (roundScore === 52){
      $('.clown').css({'background-image': 'url("images/clown1.png")'});
      $('#target2').css({'background-image': 'url("images/clown2.png")'});
      $('#target3').css({'background-image': 'url("images/clown3.png")'});
      $('#target4').css({'background-image': 'url("images/clown1.png")'});
      $('#target5').css({'background-image': 'url("images/clown2.png")'});
      $('#target6').css({'background-image': 'url("images/clown3.png")'});
      $('#target7').css({'background-image': 'url("images/clown1.png")'});
      $('#target8').css({'background-image': 'url("images/clown2.png")'});
      $('#target9').css({'background-image': 'url("images/clown3.png")'});
      $('#target10').css({'background-image': 'url("images/clown1.png")'});
      $('#target11').css({'background-image': 'url("images/clown2.png")'});
      $('#target12').css({'background-image': 'url("images/clown3.png")'});
      $('#target13').css({'background-image': 'url("images/clown1.png")'});
  }if (roundScore === 65){
      $('.clown').css({'background-image': 'url("images/clown1.png")'});
      $('#target2').css({'background-image': 'url("images/clown2.png")'});
      $('#target3').css({'background-image': 'url("images/clown3.png")'});
      $('#target4').css({'background-image': 'url("images/clown1.png")'});
      $('#target5').css({'background-image': 'url("images/clown2.png")'});
      $('#target6').css({'background-image': 'url("images/clown3.png")'});
      $('#target7').css({'background-image': 'url("images/clown1.png")'});
      $('#target8').css({'background-image': 'url("images/clown2.png")'});
      $('#target9').css({'background-image': 'url("images/clown3.png")'});
      $('#target10').css({'background-image': 'url("images/clown1.png")'});
      $('#target11').css({'background-image': 'url("images/clown2.png")'});
      $('#target12').css({'background-image': 'url("images/clown3.png")'});
      $('#target13').css({'background-image': 'url("images/clown1.png")'});
  } if (roundScore >= 65){
    alert("YOURE AMAZING!")
    return false;

  }
  else
  return false;
}, 800);

// when document loads below
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

//clownImages to randomize
var clownImages = [];

clownImages[0] = {
  image01 : new Image(),
    src : "clown3.png",
}
clownImages[1] = {
  image01 : new Image(),
    src : "clown2.png",
}
clownImages[2] = {
  image01 : new Image(),
    src : "clown1.png",
}

//establish function to remove all repeated code
$('.clown').on('click', function shootClown(e){
    console.log("HIT!  " + $(this));

    //change photo to red-x
    $(this).css({'background-image': 'url("images/redx.png")', 'background-repeat' : 'no-repeat' , 'background-size' : '12vw 23vh' });
    // get score
    //increment score by one
    //change score in html
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
//checking for 13 score


// stop when hits 0
  if (clockInt > 0 ){
    var timeDescend = clock.html("0" +decreasedClock);
  } else{
    clearInterval(countDownInterval);
    alert("TIMES UP!!!");
  }
}
 countDownInterval = setInterval(CountDown, 1000);
// timer function when 0 seconds on clock =  STOP game

});































