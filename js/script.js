sliderInt = 1;
sliderNext = 2;

// Load scriptet når siden er loadet
$(document).ready(function() {
	$('#slider>img#1').fadeIn(300);
	startSlider();
});

// Scriptet skal automatisk loope uden brugerinteraktion
function startSlider() {
	count = $("#slider>img").size();

	loop = setInterval(function() {

		if(sliderNext>count) {
			sliderNext=1;
			sliderInt=1;
		}
		// Billede fades ud og et nyt fades in
		$("#slider>img").fadeOut(300);
		$("#slider>img#" + sliderNext).fadeIn(300);

		// Tælleren skal forøges for at vise næste billede i rækken
		sliderInt = sliderNext;
		sliderNext = sliderNext+1;

	}, 3000)
}

// Knappen previous skal fungere ved at trække 1 count fra
function prev() {
	newSlide = sliderInt-1;
	showSlide(newSlide);
}

// Knappen next skal fungere ved at lægge 1 count til
function next() {
	newSlide = sliderInt+1;
	showSlide(newSlide);
}

// En funktion til at stoppe/pause loopet
function stopLoop() {
	window.clearInterval(loop);
}

function showSlide(id) {
	stopLoop();
	if(id>count) {
		id=1;
	} else if(id<1) {
		id = count;
	}

	$("#slider>img").fadeOut(300);
	$("#slider>img#" + id).fadeIn(300);

	sliderInt = id;
	sliderNext = id+1;
	startSlider();
}

$("#slider>img").hover(
	function() {
		stopLoop();
	},
	function() {
		startSlider();
	}
);