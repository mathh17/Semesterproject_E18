class Dilemma {
    constructor(antalSvarMuligheder, billedLokation) {
        this.antalSvarMuligheder = antalSvarMuligheder;
        this.billedLokation = billedLokation;
        this.billeder = [''];

        for (var i = 0; i < billedLokation.length; i++) {

            this.billeder[i] = new Image();
            this.billeder[i].src = billedLokation[i];
        }
    }
}

$(document).ready(function () {
    let dilemma1 = new Dilemma(3, ['../dilemmaer/dilemma1/INTROHISTORIE_JPG.jpg','../dilemmaer/dilemma1/INTROHISTORIE2_JPG.jpg','../dilemmaer/dilemma1/INTROHISTORIE3_JPG.jpg','../dilemmaer/dilemma1/INTROHISTORIE4_JPG.jpg']);
    let dilemma2 = new Dilemma(3, ['../dilemmaer/dilemma1/INTROHISTORIE_JPG.jpg','../dilemmaer/dilemma1/INTROHISTORIE2_JPG.jpg','../dilemmaer/dilemma1/INTROHISTORIE3_JPG.jpg','../dilemmaer/dilemma1/INTROHISTORIE4_JPG.jpg']); let dilemma3 = new Dilemma(3, ['../dilemmaer/dilemma1/INTROHISTORIE_JPG.jpg','../dilemmaer/dilemma1/INTROHISTORIE2_JPG.jpg','../dilemmaer/dilemma1/INTROHISTORIE3_JPG.jpg','../dilemmaer/dilemma1/INTROHISTORIE4_JPG.jpg']); let dilemma4 = new Dilemma(3, ['../dilemmaer/dilemma1/INTROHISTORIE_JPG.jpg','../dilemmaer/dilemma1/INTROHISTORIE2_JPG.jpg','../dilemmaer/dilemma1/INTROHISTORIE3_JPG.jpg','../dilemmaer/dilemma1/INTROHISTORIE4_JPG.jpg']);
    let dilemma5 = new Dilemma(3, ['../dilemmaer/dilemma1/INTROHISTORIE_JPG.jpg','../dilemmaer/dilemma1/INTROHISTORIE2_JPG.jpg','../dilemmaer/dilemma1/INTROHISTORIE3_JPG.jpg','../dilemmaer/dilemma1/INTROHISTORIE4_JPG.jpg']);  var dilemmaPosition = 0;
    var scenePosition = 0;

    var dilemmaer = [dilemma1, dilemma2, dilemma3, dilemma4, dilemma5]
    console.log(dilemma1.billeder[0]);
    $('#canvas').css('background-image', 'url(' + dilemmaer[0].billedLokation[0] + ')');


    $("#næsteDilemma").click(function () {
        if (dilemmaPosition < dilemmaer.length - 1) {
            scenePosition =0;
            dilemmaPosition++;
            $('#canvas').css('background-image', 'url(' + dilemmaer[dilemmaPosition].billedLokation[0] + ')');
        }
    });
    
    $("#forrigeDilemma").click(function () {
        if (dilemmaPosition > 0) {
            scenePosition =0;
            dilemmaPosition--;
            $('#canvas').css('background-image', 'url(' + dilemmaer[dilemmaPosition].billedLokation[0] + ')');
        }
    });
    
    
     $("#næsteScene").click(function () {
        if(scenePosition < dilemmaer[dilemmaPosition].billedLokation.length-1){
        scenePosition++;
            $('#canvas').css('background-image', 'url(' + dilemmaer[dilemmaPosition].billedLokation[scenePosition] + ')');
            }
    });

})
