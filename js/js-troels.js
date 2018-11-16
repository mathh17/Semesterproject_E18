$(document).ready(function () {

    $(".slideInBtn, .infoBoxEscBtn").click(function () {
        $("#slideInBox").toggleClass("slideInView");
        $("#overlay").toggleClass("opacity");
        $(".opacity").click(function () {
            $("#slideInBox").removeClass("slideInView");
            $("#overlay").removeClass("opacity");
        });
    });
});
