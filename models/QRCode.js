export default class QRCode {
  constructor(type, url) {
    const validTypes = ["link", "video", "document"];
    if (!validTypes.includes(type)) {
      throw new Error(`Invalid QRCode type: ${type}`);
    }
    this.type = type;
    this.url = url;
  }
}

module.exports = QRCode;
