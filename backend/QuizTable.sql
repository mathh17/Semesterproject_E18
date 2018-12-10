
create database quiz;

use quiz;

CREATE TABLE quiztable (id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT primary key,spørgsmål text(1000), svar1 text(1000), svar2 text(1000), svar3 text(1000), rigtig_svar text(1000), facit int(1));

insert into quiztable values(default, "Hvor mange procent af unge mennesker tror du overvurderer deres omgangskredses drukvaner?","80%","40%","4%","Ifølge en dansk undersøgelse viser det sig at 40% af unge i 8-9 klasse overvurderer hvor meget deres klassekamerater/omkreds drikker og det stiger jo ældre man bliver.",2);

insert into quiztable values(default, "Hvilken effekt på ens alkoholforbrug tror du det har at man er overbevist om at andre drikker mere end én selv?","Det gør at man tager det mere roligt og har bedre kontrol over sig forbrug","Det har ingen effekt","Det gør at man overkompenserer og drikker mere","Dem der overvurderede deres omgangskredses alkoholforbrug var meget mere tilbøjelige til at drikker endnu mere",3);
insert into quiztable values(default, "Hvor lang tid skal du knalde for at forbrænde én sixpack?","179 minutter","116 minutter","39 minutter","179 minutter! Og lad os være ærlige, det sker jo ikke ;)",1);
insert into quiztable values(default, "Hvis man bliver for fuld hvordan bliver man så hurtigst ædru igen?","Kaffe","Løb","Man kan ikke øge farten af hvor hurtigt man bliver ædru","Hastigheden af hvordan det alkohol du har i blodet forlader kroppen er uafhængigt af hvad du ellers indtager eller foretager dig. Hvis først alkoholet er i blodet så tager det den tid det tager. ",3);
insert into quiztable values(default, "er unges alkoholforbrug steget eller faldet de seneste par år? ","Det er steget","Det er faldet","Det er uændret","Den gennemsnitlige mængde alkohol unge i Danmark drikker er faldet over de seneste par år!",2);
insert into quiztable values(default, "Hvad sker der hvis man drikker på tom mave?","Der er ikke noget til at 'suge' alkoholen så man bliver hurtigere fuld","Det har ingen effekt","Maven er tom, så der er mere plads til akoholen ","At drikke på tom mave gør det sværere at styre sin brandert og gør at alkoholen man drikker kan ramme meget pludseligt derfor er chancen for at gå under til festen meget større",1);


GRANT ALL PRIVILEGES ON quiz.* TO sqluser@localhost;

select * from quiztable;
