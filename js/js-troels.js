$(document).ready(function () {

    $(".slideInBtn, .infoBoxEscBtn").click(function () {
        $("#slideInBox").toggleClass("slideInView");
        $("#overlay").toggleClass("opacity");
        $(".opacity").click(function () {
            $("#slideInBox").removeClass("slideInView");
            $("#overlay").removeClass("opacity");
        });
    });
     $(".clickToContinueBeer").click(function () {
        $(".introBox").slideUp();
        $(".introHeadline").addClass("introHeadlineTransision");
        $(".lowerText").addClass("lowerTextTransision");
        $(".introBigLetter").addClass("introBigLetterTransision");
        $(".clickToContinueBeer").remove();
    });

    
    
    (function pulse(back) {
        $('.beerimg img').animate({
            width: (back) ? $('.beerimg img').width() + 20 : $('.beerimg img').width() - 20
        }, 2000);
        $('.beerimg').animate({
            'font-size': (back) ? '100px' : '140px',
            opacity: (back) ? 1 : 0.5
        }, 2000, function () {
            pulse(!back)
        });
    })(false);
});
