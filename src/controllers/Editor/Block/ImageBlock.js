
import Block from "./Block";

export default class imageBlock extends Block {
    
  constructor(image) {
    super();
    type = null; // either a url string or binary form of the image 
      this.image = image; 
      this.width = 400;
      this.height = 300;
    }
    
    resize(width, height) { 
      //resize the image in the server
      // and return a new one
    }


}
