var wins = 0;
var looses = 0;
var yourScore = 0;


var gems = [];
var targetVal = 0;



$(document).ready(function () {


	// so i can add it to the paragraph but i cant inject this into .target-number
	// solved

	function randomTargetVal() {
		targetVal = Math.floor(Math.random() * 80) + 12;
		$('#targetNumber').html("Target Number : " + targetVal);
	}



	


	// 	function loadImage(path, width, height, target) {
	//     $('<img src="'+ path +'">').load(function() {
	//       $(this).width(width).height(height).appendTo(target);
	//     });
	// }

	// loadImage("assets/images/1.png", 150, 150, ".gems");




	function gemAssign(){

		var crystal1 = randomGem();
		var crystal2 = randomGem();
		var crystal3 = randomGem();
		var crystal4 = randomGem();

		function randomGem() {
			return Math.floor(Math.random() * 12) + 1;
			}
		// added attr and class
		$("#pic1").attr("data-value", crystal1);
		$('#pic2').attr("data-value", crystal2);
		$('#pic3').attr("data-value", crystal3);
		$('#pic4').attr("data-value", crystal4);

		$("#pic1").addClass("button");
		$("#pic2").addClass("button");
		$("#pic3").addClass("button");
		$("#pic4").addClass("button");

		

	}


	reset();



	$(".button").on("click", function() {
		yourScore += parseInt($(this).attr("data-value"));
		console.log(yourScore);
		$("#score-add").html("Your Score : " + yourScore);


		if (yourScore === targetVal){
			wins++;
			// alert("youWin");
			$("#win").html("Wins: " + wins);
			$("#messageEnd").html("YOU WIN!");
			// $("#messageEnd").addClass("winning");
			reset();
		}
		else if (yourScore > targetVal){
			looses++;
			// alert("sorry");
			$("#lose").html("Lose: " + looses);
			$("#messageEnd").html("YOU WIN!");
			// $("#messageEnd").addClass("loser");
			reset();
		}

	});


	function reset() {
		randomTargetVal();
		gemAssign();

		yourScore = 0;

		$("#score-add").html("Your Score : " + yourScore);

	};
	

});





