/** @format */

import Block from "./Block";

export default class ImageBlock extends Block {
  constructor(image) {
    super("image");
    this.image = image;
    this.width = 400;
    this.height = 300;
  }

  resize(width, height) {
    //resize the image in the server
    // and return a new one
  }
  getImg() { 
    return this.image
  }
  setImage(image) {
    this.image = image;
  }
}
