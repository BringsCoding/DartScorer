const TextFeldOne = document.querySelector("#feldOne");
const TextFeldTow = document.querySelector("#feldTow");
const TextFeldThree = document.querySelector("#feldThree");
const Button = document.querySelector("#summit");
const Ergebnnis = document.querySelector("#ende");
const Zusammen = document.querySelector("#zusammen");
const sound = new Audio("audio.mp3");
let start = 501;

Button.addEventListener("click", function () {
  const Arr = [];

  let FeldOne = TextFeldOne.value;
  document.getElementById("ende1").innerHTML = FeldOne;
  Arr.push(FeldOne);
  if (FeldOne > 60) {
    swal("Feld 1 ist zu hoch Maximal 60 Punkte");
    return;
  }

  let FeldTow = TextFeldTow.value;
  document.getElementById("ende2").innerHTML = FeldTow;
  Arr.push(FeldTow);
  if (FeldTow > 60) {
    swal("Feld 2 ist zu hoch Maximal 60 Punkte");
    return;
  }

  let FeldThree = TextFeldThree.value;
  document.getElementById("ende3").innerHTML = FeldThree;
  Arr.push(FeldThree);
  if (FeldThree > 60) {
    swal("Feld 3 ist zu hoch Maximal 60 Punkte");
    return;
  }

  console.log(Arr);

  var gesamtePunktzahl = 0;
  for (i = 0; i < Arr.length; i++) {
    gesamtePunktzahl += parseInt(Arr[i]);
  }
  console.log(gesamtePunktzahl);

  let gesamtwertaufHTML = (document.getElementById("ende4").innerHTML =
    gesamtePunktzahl);

  let XA = (document.getElementById("ende5").innerHTML =
    start - gesamtePunktzahl);

  console.log(gesamtwertaufHTML);
  console.log(start);

  //Darf nicht mehr als 180 Punkte überschreiten
  if (gesamtePunktzahl > 181) {
    swal("Maximal 180 Punkte dürfen geworfen werden");
    console.log("test");
    return gesamtePunktzahl;
  }

  if (gesamtePunktzahl === 180) {
    sound.play();
  }

  calc(gesamtePunktzahl);
  gesamtwertaufHTML.innerText = start;

  if (start <= 0) {
    swal("Glückwunsch zum Sieg", "Starte das Spiel Neu", "success");
    console.log("bitte Spiel Neu Starten");
  }

  //Soll den letzten wert wieder geben
  var items = document.querySelectorAll("li");
  var lastchild = items[items.length - 1];
  if (start <= -1) {
    alert("Du bist im minus bereich");
    return (document.getElementById("ende5").innerHTML = lastchild);
  }

  var ul = document.getElementById("list");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(gesamtwertaufHTML));
  ul.appendChild(li);
});

function calc(x) {
  start = start - x;
  return start;
}
