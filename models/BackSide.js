import QRCode from "./QRCode.js";
import ContactInfo from "./ContactInfo.js";
import Image from "./Image.js";

export default class BackSide {
  constructor(welcomeMessage, contactInfo = [], qrCodes = [], images = []) {
    this.welcomeMessage = welcomeMessage;
    this.contactInfo = contactInfo;
    this.qrCodes = qrCodes;
    this.images = images;
  }
}

module.exports = BackSide;
