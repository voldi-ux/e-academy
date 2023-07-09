/** @format */

import { v4 as uuid } from "uuid";

export default class Block {
  constructor(type) {
    this.blockId = uuid();
    this.type = type
  }
}
