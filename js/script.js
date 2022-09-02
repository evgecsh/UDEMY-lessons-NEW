"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const tabs = require("./modules/tabs"),
    cards = require("./modules/cards"),
    timer = require("./modules/timer"),
    modal = require("./modules/modal"),
    calc = require("./modules/calc"),
    forms = require("./modules/forms"),
    slider = require("./modules/slider");

  tabs();
  modal();
  timer();
  cards();
  calc();
  forms();
  slider();
});
