 var songs=["http://www.danskesange.dk/mp3/vejm51.mp3",
    "http://www.danskesange.dk/mp3/frejdig.mp3",
    "http://www.danskesange.dk/mp3/oleluk.mp3",
    "http://www.danskesange.dk/mp3/dejli195.mp3",
    "http://www.danskesange.dk/mp3/dejjord.mp3",
    "http://www.danskesange.dk/mp3/signe215.mp3",
    "http://www.danskesange.dk/mp3/bager.mp3",
    "http://www.danskesange.dk/mp3/dagve175.mp3",
    "http://www.danskesange.dk/mp3/yndi.mp3",
    "http://www.danskesange.dk/mp3/dudan164.mp3",
    "http://www.danskesange.dk/mp3/fdev.mp3",
    "http://www.danskesange.dk/mp3/hist247.mp3",
    "http://www.danskesange.dk/mp3/ienkal.mp3",
    "http://www.danskesange.dk/mp3/ienskov.mp3",
    "http://www.danskesange.dk/mp3/iskov223.mp3",
    "http://www.danskesange.dk/mp3/havre170.mp3",
    "http://www.danskesange.dk/mp3/jeggikmi.mp3",
    "http://www.danskesange.dk/mp3/jeghest.mp3",
    "http://www.danskesange.dk/mp3/jegved.mp3",
    "http://www.danskesange.dk/mp3/trebuler.mp3",
    "http://www.danskesange.dk/mp3/nufal181.mp3",
    "http://www.danskesange.dk/mp3/mshgim.mp3",
    "http://www.danskesange.dk/mp3/smald.mp3",
    "http://www.danskesange.dk/mp3/fdev.mp3",
    "http://www.danskesange.dk/mp3/internat.mp3",
    "http://www.danskesange.dk/mp3/solenrod.mp3",
    "http://www.danskesange.dk/mp3/enebaer.mp3",
    "http://www.danskesange.dk/mp3/sursur.mp3",
    "http://www.danskesange.dk/mp3/midsom.mp3"];

    function playlist() {
      audio = document.createElement("audio");
      audio.src = songs[Math.floor(Math.random() * songs.length)];
      audio.addEventListener("ended",function() {
    audio.src = songs[Math.floor(Math.random() * songs.length)]
    audio.play();
      })
      audio.play();
    };