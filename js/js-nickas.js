$(document).ready(function() {

    $('img').jrumble({

        x: 2,

        y: 2,

        rotation: 1

    });

 

    $('img').hover(function() {

        $(this).trigger('startRumble');

    }, function() {

        $(this).trigger('stopRumble');

    });

});​
