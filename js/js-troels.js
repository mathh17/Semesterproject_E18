$( document ).ready(function() {

   $(".slideInBtn, .infoBoxEscBtn, .opacity").click(function(){
       $("#slideInBox").toggleClass("slideInView");
       $("#overlay").toggleClass("opacity");
   });
});