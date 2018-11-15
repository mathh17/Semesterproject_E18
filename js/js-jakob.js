$(document).ready(function () {


    setTimeout(
        function () {
            $(".introBox").slideUp();
            $(".introHeadline").addClass("introHeadlineTransision");
            $(".lowerText").addClass("lowerTextTransision");
            $(".introBigLetter").addClass("introBigLetterTransision");
        }, 5000);

    $(".introBox").click(function () {
        $(".introBox").slideUp();
        $(".introHeadline").addClass("introHeadlineTransision");
        $(".lowerText").addClass("lowerTextTransision");
        $(".introBigLetter").addClass("introBigLetterTransision");
    });








});
