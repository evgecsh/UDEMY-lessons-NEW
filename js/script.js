"use strict";
var Promise = require("es6-promise-polyfill").Promise;
import "nodelist-foreach-polyfill";

import tabs from "./modules/tabs";
import cards from "./modules/cards";
import timer from "./modules/timer";
import modal from "./modules/modal";
import calc from "./modules/calc";
import forms from "./modules/forms";
import slider from "./modules/slider";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    50000
  );

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  modal("[data-modal]", ".modal", modalTimerId);
  timer(".timer", "2022-09-11");
  cards();
  calc();
  forms("form", modalTimerId);
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
    slide: ".offer__slide",
  });
});
