class Dilemma {
    constructor(billedLokation, svarBilleder) {
        this.sceneBilleder = billedLokation;
        this.svarBilleder = svarBilleder;
    }
}

$(document).ready(function () {
    $("#knapTilToSvarSider").hide();
    $("#valgBtn3, #valgBtn2").hide();
    $("#prøvIgenOgFremadBtn").hide();
    $("#prøvForFraBtn").hide();
    let dilemma1 = new Dilemma(['../dilemmaer/Dilemma1/INTRO_JPG.jpg', '../dilemmaer/Dilemma1/INTROHISTORIE_JPG.jpg', '../dilemmaer/Dilemma1/INTROHISTORIE2_JPG.jpg', '../dilemmaer/Dilemma1/INTROHISTORIE3_JPG.jpg', '../dilemmaer/Dilemma1/INTROHISTORIE4_JPG.jpg', '../dilemmaer/Dilemma1/DILEMMA1_JPG.jpg', '../dilemmaer/Dilemma1/DILEMMA1.1_JPG.jpg', '../dilemmaer/Dilemma1/DILEMMA1.2_JPG.jpg'], ['../dilemmaer/Dilemma1/DILEMMA1_SVAR_1_JPG.jpg', '../dilemmaer/Dilemma1/DILEMMA1_SVAR_2_JPG.jpg', '../dilemmaer/Dilemma1/DILEMMA1_SVAR_3_JPG.jpg']);


    let dilemma2 = new Dilemma(['../dilemmaer/dilemma2/DILEMMA2_intro_JPG.jpg', '../dilemmaer/dilemma2/DILEMMA2.2_JPG.jpg'], ['../dilemmaer/dilemma2/DILEMMA2._SVAR1_JPG.jpg', '../dilemmaer/dilemma2/DILEMMA2._SVAR2_JPG.jpg', '../dilemmaer/dilemma2/DILEMMA2._SVAR3_JPG.jpg']);

    let dilemma3 = new Dilemma(['../dilemmaer/dilemma3/DILEMMA3_intro_JPG.jpg', '../dilemmaer/dilemma3/DILEMMA3.2_JPG.jpg'], ['../dilemmaer/dilemma3/DILEMMA3_SVAR1_JPG.jpg', '../dilemmaer/dilemma3/DILEMMA3_SVAR2_JPG.jpg', '../dilemmaer/dilemma3/DILEMMA3_SVAR3_JPG1.jpg']);

    let dilemma4 = new Dilemma(['../dilemmaer/dilemma4/DILEMMA4__Intro_Jpg.jpg', '../dilemmaer/dilemma4/4_valg_jpg.jpg'], ['../dilemmaer/dilemma4/4_svar1.jpg', '../dilemmaer/dilemma4/4_svar1.2_jpg.jpg', '../dilemmaer/dilemma4/4_svar2_jpg.jpg']);

    let dilemma5 = new Dilemma(['../dilemmaer/dilemma5/Intro_jpg.jpg','../dilemmaer/dilemma5/5_muligheder_jpg.jpg'], ['../dilemmaer/dilemma5/5_svar1_jpg.jpg', '../dilemmaer/dilemma5/5_svar2_jpg.jpg']);
    let dilemma6 = new Dilemma(['../dilemmaer/dilemma5/end.jpg'], ['']);

    var scenePosition = 0;
    var dilemmaPosition = 4;

    var dilemmaer = [dilemma1, dilemma2, dilemma3, dilemma4, dilemma5, dilemma6]
    /* $('#canvas').css('background-image', 'url(' + dilemmaer[0].billedLokation[0] + ')');*/
    BuildDilemma(dilemmaer[dilemmaPosition]);

    $("#næsteDilemma").click(function () {
        if (dilemmaPosition < dilemmaer.length - 1) {
            scenePosition = 0;
            dilemmaPosition++;
            BuildDilemma(dilemmaer[dilemmaPosition]);
        }
    });

    $("#forrigeDilemma").click(function () {
        if (dilemmaPosition >= 0) {
            scenePosition = 0;
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
    $("#valgBtn3 button, #valgBtn2 button").click(function () {
        //her findes index af knappen
        var valgtNummer = $("#valgBtn3 button, #valgBtn2 button").index(this);
        //Hvis der kun er 2 valg, trækkes tre fra index fordi den tæller de tre første knapper og derfor får index
        if (valgtNummer > 2) {
            valgtNummer -= 3;
        }
        $("#prøvIgenOgFremadBtn").show();
        $("#valgBtn3, #valgBtn2").hide();
        changePicture(dilemmaer[dilemmaPosition].svarBilleder[valgtNummer]);


        //Hardcode fix til dilemma 4 hvor der er 2 svar billeder til et enkelt svar.
        if (dilemmaPosition == 3 && valgtNummer == 0) {

            $("#knapTilToSvarSider").show();
            $("#prøvIgenOgFremadBtn").hide();
            $("#næsteSvarBillede").click(function () {
                changePicture(dilemma4.svarBilleder[1]);
                $("#prøvIgenOgFremadBtn").show();
                $("#knapTilToSvarSider").hide();
            });
        } else if(dilemmaPosition == 3 && valgtNummer == 1){
            changePicture(dilemma4.svarBilleder[2]);
        }


    });

    function changePicture(billede) {


        $("button").fadeOut(100);
        $("img").slideUp("fast", function () {
            $("img").attr("src", billede);
            $("img").slideDown();
            $("button").fadeIn();
        })
    }

    //Bygger dilemmaerne når der kligges på forrige dilemma og næste dilemma knapper
    function BuildDilemma(dilemma) {
        if (dilemmaPosition != dilemmaer.length - 1) {
            AktiverFremTilbageKnapper();
            $("#prøvIgenOgFremadBtn").hide();
            changePicture(dilemma.sceneBilleder[0]);

        } else {
            changePicture('../dilemmaer/dilemma5/end.jpg');
            $('#prøvIgenOgFremadBtn').hide();
            $('#prøvForFraBtn').show();
        }
        //Else't er til slut picture

    }

    //Shower Valg knapper og Hider frem/tilbage knapper
    function AktiverValgKnapper() {
        $("#buttons").hide();

        //Tjekker om der er 2 eller 3 valg
        if (dilemmaer[dilemmaPosition].svarBilleder.length == 3) {
            $("#valgBtn3").show();
        } else {
            $("#valgBtn2").show();
        }
        
        //hardcode fix til dilemma 4 hvor der er to svar billeder til et svar.
        if (dilemmaPosition == 3 && scenePosition ==1) {
            $("#valgBtn3").hide();
            $("#valgBtn2").show();
        }
    }

    function AktiverFremTilbageKnapper() {
        $("#buttons").show();

        //Tjekker om der er 2 eller 3 valg
        if (dilemmaer[dilemmaPosition].svarBilleder.length == 2) {
            $("#valgBtn3").hide();
        } else {
            $("#valgBtn2").hide();
        }
    }

    function NæsteScene() {
        //Skifter scenen indtil du er på sidste billede i historie arrayet. Det sidste billede er billedet med forskellige svar.

        if (scenePosition < dilemmaer[dilemmaPosition].sceneBilleder.length - 1) {
            scenePosition++;
            changePicture(dilemmaer[dilemmaPosition].sceneBilleder[scenePosition]);
        } else
            scenePosition++;

        // her rammer vi billedet med svar på og aktiverer altså Valg Knapperne 
        if (scenePosition == dilemmaer[dilemmaPosition].sceneBilleder.length - 1 && dilemmaer[dilemmaPosition].svarBilleder[0] != "") {
            AktiverValgKnapper();
            changePicture(dilemmaer[dilemmaPosition].sceneBilleder[scenePosition]);
            }

    }

    function ForrigeScene() {
        if (scenePosition < dilemmaer[dilemmaPosition].sceneBilleder.length && scenePosition != 0) {
            scenePosition--;
            
        }
        changePicture(dilemmaer[dilemmaPosition].sceneBilleder[scenePosition]);
        
    }
})
