/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";
import { arrow } from "@popperjs/core";

const genButton = document.getElementById("genButton");
const excusa = document.getElementById("excusa");

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
  function x(arr) {
    return Math.floor(Math.random() * arr.length);
    // Limpiar codigo
    // let pro1 = Math.floor(Math.random() * pro.length);
    // let quien1 = Math.floor(Math.random() * quien.length);
    // let verbo1 = Math.floor(Math.random() * verbo.length);
    // let objetivo1 = Math.floor(Math.random() * objetivo.length);
    // let donde1 = Math.floor(Math.random() * donde.length);
  }

  let genExcusa =
    pro[x(pro)] +
    quien[x(quien)] +
    verbo[x(verbo)] +
    objetivo[x(objetivo)] +
    donde[x(donde)];

  // pro([pro1] * pro.length) +
  // quien[quien1] +
  // verbo[verbo1] +
  // objetivo[objetivo1] +
  // donde[donde1];
  excusa.textContent = genExcusa;
}
// Como llamar a una funcion desde un boton
genButton.addEventListener("click", genExcusa);
genExcusa();
