/** @format */

import { v4 as uuid } from "uuid";

export default class Block {
  constructor() {
    this.blockId = uuid();
    this.inlineBlock = false;
  }

  setBlockProperty(property) {
    this.inlineBlock = property;
  }
}
