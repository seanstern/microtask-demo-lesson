import { EventEmitter } from "node:events";
import { open } from "fs/promises";

export default class Cache extends EventEmitter {
  constructor(type) {
    super();
    switch (type) {
      case "memory":
        this._memCache = new Map();
        this.emit("connected");
        break;
      case "file":
        open("./cache-file.txt", "w+")
          .then((fileHandle) => {
            this._fileCache = fileHandle;
            this.emit("connected");
          })
          .catch((err) => this.emit("error", err));
        break;
      default:
        throw new Error("invalid type");
    }
  }
}
