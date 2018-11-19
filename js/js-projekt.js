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
    
    $(window).scroll(function(){ //onscroll
        var scrolleddown = false;//used to keep the state
        if($(window).scrollTop() > 1){ //if they've scrolled down
            if(scrolleddown == false){
                scrolleddown = true;
                $('#content').stop(true, false).animate({top:'0%'},500,function(){//show it
                    $('#topcontent').hide();//hide to original content, in this case "hi!"'s
                    $(this).css("position","relative"); //make it be able to scroll down
                });
            }
        }else{
            //below resets everything back to original state when user scrolls back up
            scrolleddown = false;
            $('#topcontent').show();
                $('#content').css("position","fixed").stop(true, false).animate({top:'99%'},500)
        }
    });
});
