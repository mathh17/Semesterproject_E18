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

    
   



    $(".slideInBtnVR, .infoBoxEscBtnVR").click(function () {
        $("#slideInBoxVR").toggleClass("slideInViewVR");
        $("#opacityOverlayVR").toggleClass("OpacityOverLeftSideOnSlideInVR");
        $(".OpacityOverLeftSideOnSlideInVR").click(function () {
            $("#slideInBoxVR").removeClass("slideInViewVR");
            $("#opacityOverlayVR").removeClass("OpacityOverLeftSideOnSlideInVR");
        });
    });
    
    $(".slideInBtnStory, .infoBoxEscBtnStory").click(function () {
        $("#slideInBoxStory").toggleClass("slideInViewStory");
        $("#opacityOverlayStory").toggleClass("OpacityOverLeftSideOnSlideInStory");
        $(".OpacityOverLeftSideOnSlideInStory").click(function () {
            $("#slideInBoxStory").removeClass("slideInViewStory");
            $("#opacityOverlayStory").removeClass("OpacityOverLeftSideOnSlideInStory");
        });
    });
    
    $(".slideInBtnQuiz, .infoBoxEscBtnQuiz").click(function () {
        $("#slideInBoxQuiz").toggleClass("slideInViewQuiz");
        $("#opacityOverlayQuiz").toggleClass("OpacityOverLeftSideOnSlideInQuiz");
        $(".OpacityOverLeftSideOnSlideInQuiz").click(function () {
            $("#slideInBoxQuiz").removeClass("slideInViewQuiz");
            $("#opacityOverlayQuiz").removeClass("OpacityOverLeftSideOnSlideInQuiz");
        });
    });
    
    $(".slideInBtnDiverse, .infoBoxEscBtnDiverse").click(function () {
        $("#slideInBoxDiverse").toggleClass("slideInViewDiverse");
        $("#opacityOverlayDiverse").toggleClass("OpacityOverLeftSideOnSlideInDiverse");
        $(".OpacityOverLeftSideOnSlideInDiverse").click(function () {
            $("#slideInBoxDiverse").removeClass("slideInViewDiverse");
            $("#opacityOverlayDiverse").removeClass("OpacityOverLeftSideOnSlideInDiverse");
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
