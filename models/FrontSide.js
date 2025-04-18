import QRCode from "./QRCode.js";
import Image from "./Image.js";
import CallToAction from "./CallToAction.js";

export default class FrontSide {
  constructor(
    mainTitle,
    pageLink,
    qrCodes = [],
    benefits = [],
    callToAction,
    images = []
  ) {
    this.mainTitle = mainTitle;
    this.pageLink = pageLink;
    this.qrCodes = qrCodes; // Array de QRCode
    this.benefits = benefits; // Array de strings
    this.callToAction = callToAction; // Instancia de CallToAction
    this.images = images; // Array de Image
  }
}

module.exports = FrontSide;
