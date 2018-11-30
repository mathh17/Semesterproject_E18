$(document).ready(function () {

    setTimeout(
        function () {
            $(".introHeadline").addClass("introHeadlineOpcaity");
        }, 4000);

    setTimeout(
        function () {
            $(".lowerText").addClass("lowerTextOpacity");
            $(".beerimg").addClass("beerimgOpacity");
        }, 5500);


    setTimeout(
        
        function () {
             (function pulse(back) {
                $('.beerimg img').animate({
                    width: (back) ? $('.beerimg img').width() + 20 : $('.beerimg img').width() - 20
                }, 2000);
                $('.beerimg').animate({
                    'font-size': (back) ? '100px' : '140px',
                    /*opacity: (back) ? 1 : 0.5*/
                }, 2000, function () {
                    pulse(!back)
                });
            })(false);
            
        }, 6000);

    
   



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
        $(".introHeadlineOpcaity").addClass("introHeadlineTransision");
        $(".lowerTextOpacity").addClass("lowerTextTransision");
        $(".introBigLetter").addClass("introBigLetterTransision");
        $(".clickToContinueBeer").remove();
    });







    $('html').css({
        overflow: 'hidden'
    });
})
