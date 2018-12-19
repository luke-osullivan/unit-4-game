
$(document).ready(function() {
var wins = 0;
var losses = 0;
var currentScore = 0;
var objectiveNum = Math.floor(Math.random() * 101 + 19);


// establish variable for crystals

crystal1 = Math.floor(Math.random() * 12) + 1;
crystal2 = Math.floor(Math.random() * 12) + 1;
crystal3 = Math.floor(Math.random() * 12) + 1;
crystal4 = Math.floor(Math.random() * 12) + 1;

$("#wins").text(wins);
$("#losses").text(losses);
$("#currentScore").text(currentScore);
$("#objective").text(objectiveNum);

$("#crystal1").on("click", function () {
  currentScore = crystal1 + currentScore;
  $("#currentScore").text(currentScore);
  if (currentScore === objectiveNum) {
    wins = wins + 1;
    $("#wins").text(wins);
  }
  if (currrentScore > objectiveNum) {
    losses = losses + 1;
    $("#losses").text(losses)
  }
  
})
$("#crystal2").on("click", function () {
  currentScore = crystal2 + currentScore;
  $("#currentScore").text(currentScore);
  if (currentScore === objectiveNum) {
    wins = wins + 1;
    $("#wins").text(wins);
  }
  if (currrentScore > objectiveNum) {
    losses = losses + 1;
    $("#losses").text(losses)
  }
  
})
$("#crystal3").on("click", function () {
  currentScore = crystal3 + currentScore;
  $("#currentScore").text(currentScore);
  if (currentScore === objectiveNum) {
    wins = wins + 1;
    $("#wins").text(wins);
  }
  if (currrentScore > objectiveNum) {
    losses = losses + 1;
    $("#losses").text(losses)
  }
  
})
$("#crystal4").on("click", function () {
  currentScore = crystal4 + currentScore;
  $("#currentScore").text(currentScore);
  if (currentScore === objectiveNum) {
    wins = wins + 1;
    $("#wins").text(wins);
  }
  if (currrentScore > objectiveNum) {
    losses = losses + 1;
    $("#losses").text(losses)
  }
  
})

});