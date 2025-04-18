class QRCode {
  constructor(type, url) {
    this.type = type;
    this.url = url;
  }
}

class Benefit {
  constructor(description) {
    this.description = description;
  }
}

class ContactInfo {
  constructor(email, physicalAddress) {
    this.email = email;
    this.physicalAddress = physicalAddress;
  }
}

class Image {
  constructor(imageUrl, altText, x, y, width, height) {
    this.imageUrl = imageUrl;
    this.altText = altText;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

class CallToAction {
  constructor(text, actionUrl) {
    this.text = text;
    this.actionUrl = actionUrl;
  }
}

module.exports = {
  WarrantyCard,
  FrontSide,
  BackSide,
  QRCode,
  Benefit,
  ContactInfo,
  Image,
  CallToAction,
};
