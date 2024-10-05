/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excusa").innerHTML = genExcusa();
};
function genExcusa() {
  let pro = ["El", "Mi", "Su", "Aquel", "Ese"];
  let quien = [" Murlok", " Tauren", " Fúrbolg", " Jabaespín", " Abisario"];
  let verbo = [
    " saqueó",
    " teletransportó",
    " guardó",
    " incineró",
    " conjuró"
  ];
  let objetivo = [
    " mi espada",
    " tu daga",
    " las hiervas",
    " la comida",
    " las pociones"
  ];
  let donde = [
    " en la aldea",
    " en la posada",
    " en el caballo",
    " de tu zurrón",
    " de la tienda"
  ];

  let pro1 = Math.floor(Math.random() * pro.length);
  let quien1 = Math.floor(Math.random() * quien.length);
  let verbo1 = Math.floor(Math.random() * verbo.length);
  let objetivo1 = Math.floor(Math.random() * objetivo.length);
  let donde1 = Math.floor(Math.random() * donde.length);

  return (
    pro[pro1] +
    quien[quien1] +
    verbo[verbo1] +
    objetivo[objetivo1] +
    donde[donde1]
  );
}
