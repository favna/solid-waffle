const list = require('./list.json');
const Fuse = require("fuse.js/min");

const fuseOptions = {
  keys: ["title", "author.firstName"],
};

const fuse = new Fuse(list, fuseOptions);

// Change the pattern
const searchPattern = "Old";

const result = fuse.search(searchPattern);
console.log(result);
