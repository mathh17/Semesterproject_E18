$(document).ready(function () {


    /*setTimeout(
        function () {
            $(".introBox").slideUp();
            $(".introHeadline").addClass("introHeadlineTransision");
            $(".lowerText").addClass("lowerTextTransision");
            $(".introBigLetter").addClass("introBigLetterTransision");
        }, 5000);*/

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
        $('.beerimg img').animate({
            'font-size': (back) ? '100px' : '140px',
            opacity: (back) ? 1 : 0.5
        }, 2000, function () {
            pulse(!back)
        });
    })(false);


    (function pulse(back) {
        $('.clickToContinueText').animate({
            width: (back) ? $('.clickToContinueText').width() + 20 : $('clickToContinueText').width() - 20
        }, 2000);
        $('.clickToContinueText').animate({
            'font-size': (back) ? '100px' : '140px',
            opacity: (back) ? 1 : 0.5
        }, 2000, function () {
            pulse(!back)
        });
    })(false);




});
