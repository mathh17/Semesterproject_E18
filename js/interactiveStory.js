class Dilemma {
    constructor(antalSvarMuligheder, billedLokation, svarBilleder) {
        this.antalSvarMuligheder = antalSvarMuligheder;
        this.billedLokation = billedLokation;
        this.svarBilleder = svarBilleder;
        this.billeder = [''];
    }
}

$(document).ready(function () {

    $("#valgBtn").hide();
    let dilemma1 = new Dilemma(3, ['../dilemmaer/intro/INTROHISTORIE_JPG.jpg', '../dilemmaer/intro/INTROHISTORIE2_JPG.jpg', '../dilemmaer/intro/INTROHISTORIE3_JPG.jpg', '../dilemmaer/intro/INTROHISTORIE4_JPG.jpg'], ['../dilemmaer/dilemma1/DILEMMA1_SVAR_1_JPG.jpg', '../dilemmaer/dilemma1/DILEMMA1_SVAR_2_JPG.jpg', '../dilemmaer/dilemma1/DILEMMA1_SVAR_3_JPG.jpg']);
    let dilemma2 = new Dilemma(3, ['../dilemmaer/dilemma1/DILEMMA1_JPG.jpg', '../dilemmaer/dilemma1/DILEMMA1.1_JPG.jpg', '../dilemmaer/dilemma1/DILEMMA1.2_JPG.jpg'], ['../dilemmaer/dilemma1/DILEMMA1_SVAR_1_JPG.jpg', '../dilemmaer/dilemma1/DILEMMA1_SVAR_2_JPG.jpg', '../dilemmaer/dilemma1/DILEMMA1_SVAR_3_JPG.jpg']);
    let dilemma3 = new Dilemma(3, ['../dilemmaer/dilemma1/INTROHISTORIE_JPG.jpg', '../dilemmaer/dilemma1/INTROHISTORIE2_JPG.jpg', '../dilemmaer/dilemma1/INTROHISTORIE3_JPG.jpg', '../dilemmaer/dilemma1/INTROHISTORIE4_JPG.jpg'], ['../dilemmaer/dilemma1/DILEMMA1_SVAR_1_JPG.jpg', '../dilemmaer/dilemma1/DILEMMA1_SVAR_2_JPG.jpg', '../dilemmaer/dilemma1/DILEMMA1_SVAR_3_JPG.jpg']);
    let dilemma4 = new Dilemma(3, ['../dilemmaer/dilemma1/INTROHISTORIE_JPG.jpg', '../dilemmaer/dilemma1/INTROHISTORIE2_JPG.jpg', '../dilemmaer/dilemma1/INTROHISTORIE3_JPG.jpg', '../dilemmaer/dilemma1/INTROHISTORIE4_JPG.jpg'], ['../dilemmaer/dilemma1/DILEMMA1_SVAR_1_JPG.jpg', '../dilemmaer/dilemma1/DILEMMA1_SVAR_2_JPG.jpg', '../dilemmaer/dilemma1/DILEMMA1_SVAR_3_JPG.jpg']);
    let dilemma5 = new Dilemma(3, ['../dilemmaer/dilemma1/INTROHISTORIE_JPG.jpg', '../dilemmaer/dilemma1/INTROHISTORIE2_JPG.jpg', '../dilemmaer/dilemma1/INTROHISTORIE3_JPG.jpg', '../dilemmaer/dilemma1/INTROHISTORIE4_JPG.jpg'], ['../dilemmaer/dilemma1/DILEMMA1_SVAR_1_JPG.jpg', '../dilemmaer/dilemma1/DILEMMA1_SVAR_2_JPG.jpg', '../dilemmaer/dilemma1/DILEMMA1_SVAR_3_JPG.jpg']);
    var dilemmaPosition = 0;
    var scenePosition = 1;
    var dilemmaPosition = 1;



    var dilemmaer = [dilemma1, dilemma2, dilemma3, dilemma4, dilemma5]
    console.log(dilemma1.billeder[0]);
    /* $('#canvas').css('background-image', 'url(' + dilemmaer[0].billedLokation[0] + ')');*/
    BuildDilemma(dilemmaer[dilemmaPosition]);

    $("#næsteDilemma").click(function () {
        if (dilemmaPosition < dilemmaer.length - 1) {
            scenePosition = 0;
            dilemmaPosition++;
            AktiverFremTilbageKnapper();
            BuildDilemma(dilemmaer[dilemmaPosition]);
        }
    });

    $("#forrigeDilemma").click(function () {
        if (dilemmaPosition > 0) {
            scenePosition = 0;
            dilemmaPosition--;
            AktiverFremTilbageKnapper();
            BuildDilemma(dilemmaer[dilemmaPosition]);
        }
    });

    //Går til næste scene, hvis du er på svar billedet, sørger den også for at aktivere valg knapperne
    $("#næsteScene").click(function () {
        NæsteScene();
    });
    //Går tilbage i scenen hvis du ikke er på første billede i scenen
    $("#forrigeScene").click(function () {
        ForrigeScene();
    });

    //Sørger for at valg knapperne skifter til dit valg efter hvilken knap du klikker på, gøres ved at finde index af knappen du trykker på
    $("#valgBtn button").click(function () {
        //her findes index af knappen
        var valgtNummer = $("#valgBtn button").index(this);
        $("img").attr("src", dilemmaer[dilemmaPosition].svarBilleder[valgtNummer]);
    });





    //Bygger dilemmaerne når der kligges på forrige dilemma og næste dilemma knapper
    function BuildDilemma(dilemma) {
        $("img").attr("src", dilemma.billedLokation[0]);
    }

    //Shower Valg knapper og Hider frem/tilbage knapper
    function AktiverValgKnapper() {
        $("#buttons").hide();
        $("#valgBtn").show();
    }

    function AktiverFremTilbageKnapper() {
        $("#buttons").show();
        $("#valgBtn").hide();
    }

    function NæsteScene() {
        //Skifter scenen indtil du er på sidste billede i historie arrayet. Det sidste billede er billedet med forskellige svar.
        if (scenePosition < dilemmaer[dilemmaPosition].billedLokation.length - 1) {
            scenePosition++;
            $("img").attr("src", dilemmaer[dilemmaPosition].billedLokation[scenePosition]);
        } else
            scenePosition++;
        console.log(dilemmaer[dilemmaPosition].billedLokation.length + " og " + scenePosition);

        // her har vi ramt billedet med svar på og aktiverer altså Valg Knapperne 
        if (scenePosition == dilemmaer[dilemmaPosition].billedLokation.length) {
            AktiverValgKnapper();
            $("img").attr("src", dilemmaer[dilemmaPosition].billedLokation[0]);
        }
    }

    function ForrigeScene() {
        if (scenePosition < dilemmaer[dilemmaPosition].billedLokation.length) {
            scenePosition--;
            $("img").attr("src", dilemmaer[dilemmaPosition].billedLokation[scenePosition]);
        }
    }




})
