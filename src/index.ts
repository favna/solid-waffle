import Fuse from "fuse.js";
import list from "./list.json";

export function main() {
  const fuseOptions = {
    keys: ["title", "author.firstName"],
  };

  const fuse = new Fuse(list, fuseOptions);

  // Change the pattern
  const searchPattern = "Old";

  const result = fuse.search(searchPattern);
  console.log(result);
}

main();
