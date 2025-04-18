import FrontSide from "./FrontSide.js";
import BackSide from "./BackSide.js";

export default class WarrantyCard {
  constructor(cardId, frontSide, backSide) {
    this.cardId = cardId;
    this.frontSide = frontSide;
    this.backSide = backSide;
  }
}

module.exports = WarrantyCard;
