var wins = 0;
var looses = 0;
var yourScore = 0;


var gems = [];
var crystalVal = ramdomCrystalVal();

function ramdomCrystalVal() {
	return Math.floor(Math.random() * 99) + 15;
}




$(document).ready(function() {

var yourScore = 0;	

function randomGenerate() {
	var randomNum = Math.floor(Math.random() * 50) + 1;

	var randomNumDiv = $("<div>");

	randomNumDiv.html(randomNum);

	$('.paragraph').append(randomNumDiv);
}

	randomGenerate();




function stoneGen() {

	var gemPoints = [12, 8, 2, 3];

	// i found a useful tutorial to ranomly generate the array of values i choose for my stones
	// i would like to use this method because i feel that it adds strategy to know that these are the
	// only 4 values they will have. I understand i can use a random number for each crystal from 1-12 each time.
	gemPoints.sort(function() {return 0.5 - Math.random()});

	
	for (var i = 0; i < gemPoints.length; i++){

		var crystalBtn = $('<button>');

		crystalBtn.addClass("letter-button letter letter-button-color");

		crystalBtn.attr('data-letter', gemPoints[i]);

		crystalBtn.text(gemPoints[i]);

		$(".gems").append(crystalBtn);

	}
}

stoneGen();


$('.letter-button').on("click", function() {



})



});

