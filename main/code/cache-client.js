import Cache from "./cache-v1.mjs";

const cache = new Cache("file");
cache.on("connected", () => console.log("cache connected"));
cache.on("error", (err) => console.log(err));
