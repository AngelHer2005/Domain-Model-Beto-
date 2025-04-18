export default class Image {
  constructor(imageUrl, altText, x, y, width, height) {
    this.imageUrl = imageUrl;
    this.altText = altText;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

module.exports = Image;
