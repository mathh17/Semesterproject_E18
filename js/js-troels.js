$( document ).ready(function() {
   $("#slideButton").click(function(){
       $("#slideInBox").toggleClass("slideInView");
       $("#overlay").toggleClass("opacity");
   });
});