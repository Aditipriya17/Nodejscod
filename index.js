// const {a, b} = require('./math.js')

// a(9,8)
// b(7,9)

let { Save, Find } = require("./database.js");

Save();
Find();

let abcd = require("./database.js");

abcd.Delete();
abcd.Find();
abcd.Update();
