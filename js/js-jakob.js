$(document).ready(function () {

    $(".slideInBtn, .infoBoxEscBtn").click(function () {
        $("#slideInBox").toggleClass("slideInView");
        $("#opacityOverlay").toggleClass("OpacityOverLeftSideOnSlideIn");
        $(".OpacityOverLeftSideOnSlideIn").click(function () {
            $("#slideInBox").removeClass("slideInView");
            $("#opacityOverlay").removeClass("OpacityOverLeftSideOnSlideIn");
        });
    });
    $(".clickToContinueBeer").click(function () {
        $(".introBox").slideUp("slow");
        $(".introHeadline").addClass("introHeadlineTransision");
        $(".lowerText").addClass("lowerTextTransision");
        $(".introBigLetter").addClass("introBigLetterTransision");
        $(".clickToContinueBeer").remove();
    });


     (function pulse(back) {
         $('.beerimg img').animate({
             width: (back) ? $('.beerimg img').width() + 10 : $('.beerimg img').width() - 10
         }, 2000);
         $('.beerimg').animate({
             opacity: (back) ? 1 : 0.8
         }, 2000, function () {
             pulse(!back)
         });
 
     })(false);
    
    (function pulse(isBack) {
         $('.clickToContinueText').animate({
             opacity: (isBack) ? 1 : 0.5
         }, 2000, function () {
             pulse(!isBack)
         });
     })(false);



    $('html').css({
        overflow: 'hidden'
    });


})
