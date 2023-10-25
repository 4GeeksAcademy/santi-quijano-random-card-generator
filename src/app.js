/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { left } from "@popperjs/core";

window.onload = () => {
  //write your code here
  generateCard();
};

function generateCard() {
  let suits = ["♦", "♥", "♠", "♣"];

  let numbers = ["J", "K", "Q", 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let randomSuit = suits[Math.floor(Math.random() * suits.length)];

  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  let redSuit = randomSuit === "♥" || randomSuit === "♦" || false;

  let cardHtml = `<span class='${
    redSuit ? "diamond-left red" : "diamond-left"
  }'>${randomSuit}</span>
  <span class="number">${randomNumber}</span>
  <span class='${
    redSuit ? "diamond-right red" : "diamond-right"
  }'>${randomSuit}</span>`;

  let card = document.querySelector(".card");
  card.innerHTML = cardHtml;
}

let btn = document.getElementById("generate");
btn.addEventListener("click", generateCard);

setInterval(generateCard, 10000);
