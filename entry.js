let pop = require("./index.js");
let inv = process.argv[2];
let info = pop(inv);
console.log("Total Bottles Recycled: ", info.total);
console.log("Remaining Bottes: ", info.empty);
console.log("Remaining Bottle Caps: ", info.caps);
console.log("Bottles Redeemed: ", info.redeem);
