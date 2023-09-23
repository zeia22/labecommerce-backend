"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const database_2 = require("./database");
console.log((0, database_1.createUser)("u003", "Astrodev", "astrodev@email.com", "astrodev99"));
const busca = "Notebook";
const nomeSearch = (0, database_2.searchProductsByName)(busca);
console.log((0, database_1.getAllUsers)());
console.table(database_1.users);
console.table(database_1.products);
console.log(nomeSearch);
//# sourceMappingURL=index.js.map