import list from './list.json' assert { type: "json" };
import Fuse from 'fuse.js/min-basic';
// const Fuse = require("fuse.js");

const fuseOptions = {
  keys: ["title", "author.firstName"],
};

const fuse = new Fuse(list, fuseOptions);

// Change the pattern
const searchPattern = "Old";

const result = fuse.search(searchPattern);
console.log(result);
