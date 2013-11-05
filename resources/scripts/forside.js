var tekst = ["Hej", "fej", "jdlsfj"];


function drilletekst(){

    console.log("giosdijgs");
    var ord = tekst[Math.floor(Math.random() * tekst.length)];
    console.log(ord);
    $("jokes").append(ord)
}

