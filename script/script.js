$(function(){
	var carouselList = $("#carousel ul");
	// setInterval(changeSlide, 3000);
	function changeSlide() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);

	};
	function moveFirstSlide () {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};

	var imgNum = $("#carousel img").length;
	console.log(imgNum);


	function dotActive () {
		$("#dots span").bind('click', function(){
		var index = $(this).index() + 1;
		console.log(index);
		$(".dot").removeClass("active");
        $("#dot_" + index).addClass("active");
	});	
}

	dotActive();



	function moveLastSlide () {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
	};

	function changeSlidePrev() {
		moveLastSlide();
		carouselList.animate({'marginLeft':0}, 500);
	};

	var nextSlide = $(".next");
	nextSlide.click(function () {
		changeSlide();
	});

	var prevSlide = $(".prev");
	prevSlide.click(function () {
		changeSlidePrev();
	});

	

	
});



