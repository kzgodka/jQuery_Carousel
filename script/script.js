$(function () {
    var carouselList = $("#carousel ul");
    // setInterval(changeSlide, 3000);
    function changeSlide(mover) {
        carouselList.animate({'marginLeft': mover}, 500, moveFirstSlide);
    }

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    }

    var imgNum = $("#carousel img").length;


    function dotActive() {
        $("#dots span").bind('click', function () {
            var index = $(this).attr('data-dot-id');
            var slide = 'li[data-slide-id=' + index + ']';

            checkPosition(index, slide);

            $(".dot").removeClass("active");
            $("#dot_" + index).addClass("active");
        });
    }

    dotActive();

    function checkPosition(index, slide) {
        var slides = $('ul li');
        $.each(slides, function (i, item) {
            if ($(item).attr('data-slide-id') === index) {
                console.log(i);
                var mover = -((i+1)*400);
                changeSlide(mover);
            }
        });
    }

    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({marginLeft: -400});
    }

    function changeSlidePrev() {
        moveLastSlide();
        carouselList.animate({'marginLeft': 0}, 500);
    }

    var nextSlide = $(".next");
    nextSlide.click(function () {
        changeSlide(-400);
    });

    var prevSlide = $(".prev");
    prevSlide.click(function () {
        changeSlidePrev();
    });


});



