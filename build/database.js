"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProductsByName = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.products = exports.users = void 0;
exports.users = [
    {
        id: " 1",
        name: "Fulano",
        email: "<fulano@email.com",
        password: "fulano123",
        createdAt: new Date().toISOString()
    },
    {
        id: " 2",
        name: "Ciclano",
        email: "<ciclano<EMAIL>",
        password: "<PASSWORD>",
        createdAt: new Date().toISOString(),
    },
    {
        id: " 3",
        name: "pepeta",
        email: "pepeta@EMAIL",
        password: "123456",
        createdAt: new Date().toISOString(),
    }
];
exports.products = [
    {
        id: " 3",
        name: 'Notebook',
        price: "R$59876",
        description: 'color black.',
        imageUrl: '/images/notebook.svg'
    },
    {
        id: " 4",
        name: 'Smartphone',
        price: "$1000 ",
        description: 'color Blue.',
        imageUrl: "/images/smartphone.png"
    },
    {
        id: " 5",
        name: 'Chinelo',
        price: "$10 ",
        description: 'color Blue.',
        imageUrl: "/images/chinelo.png"
    },
];
function createUser(id, name, email, password) {
    const createdAt = new Date().toISOString();
    const newUser = {
        id, name, email, password, createdAt
    };
    exports.users.push(newUser);
    return `Usuário ${name} cadastrado com sucesso!`;
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.users;
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, password, description, imageUrl) {
    const newUserr = {
        id, name, price, description, imageUrl
    };
    exports.products.push(newUserr);
    return `Usuário ${name} cadastrado com sucesso!`;
}
exports.createProduct = createProduct;
function getAllProducts() {
    return exports.users;
}
exports.getAllProducts = getAllProducts;
function searchProductsByName(name) {
    const searchProducts = [];
    for (const product of exports.products) {
        if (product.name === name) {
            searchProducts.push(product);
        }
        ;
    }
    return searchProducts;
}
exports.searchProductsByName = searchProductsByName;
//# sourceMappingURL=database.js.map