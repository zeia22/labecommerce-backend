-- Active: 1695683221724@@127.0.0.1@3306

CREATE TABLE users(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    --created_at Date('now')
);

DROP TABLE users;

SELECT * FROM users;





INSERT INTO users ( id, name, email, password)
VALUES ('01', 'Felipe','felipe@email.com' , '123'),
       ('02', 'Marcos','Marcos@email.com' , '123'),
       ('03', 'Oesley','oesley@email.com' , '123');

       --Get All Users retorna todas as pessoas cadastradas exercicio 1/1

       SELECT name FROM users;

     --  Get All Products (funcionalidade 1) retorna todos os produtos cadastrados exercicios 1/2

     SELECT name FROM products;

     --Get all Products (funcionalidade 2)imagine um termo de busca, por exemplo "gamer" --retorna somente os produtos que possuem em seu nome o termo "gamer"

     SELECT name FROM products
     WHERE name LIKE '%Jeans%';

    -- Create User cria uma nova pessoa na tabela users
    
INSERT INTO users(id,name,email,password)
VALUES ('04', 'Aline', 'aline@email.com','12345');

--Create Product cria um novo produto na tabela products exercicio 2/2
INSERT INTO products(id,name,price,description,image_url)
VALUES ('01', 'shorts', 10,'T-shirt com design de calça e borda preta','https://www.google.com/search?q=camiseta+de+algod%C3%A3o+branca');

--Delete User by id deleção de user por id exercicio 3/1
DELETE FROM users where id = '01';

--Delete Product by id deleção de produto por id

DELETE FROM products WHERE id = '1';

--Edit Product by id edição de produto por id faça a query editar todas as colunas do item exercicio 3/3

UPDATE products
SET price=89, description='Black Jeans';

CREATE TABLE products(
    id TEXT PK UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL
);

INSERT INTO products(id, name, price, description,image_url) 
VALUES('1', 'Camiseta Branca', 29.90,'Camisa branca de algodão','https://www.google.com/search?q=camiseta+de+algod%C3%A3o+branca'),
('2', 'Calça de Moleton', 19.90,'Calça de moleton de algodão','https://www.google.com/search?q=camiseta+de+algod%C3%A3o+branca'),
('3', 'Bermuda Jeans', 49.90,'Bermuda Azul Jeans','https://www.google.com/search?q=camiseta+de+algod%C3%A3o+branca'),
('4', 'Sapato Masculino', 59.90,'Sapato Preto','https://www.google.com/search?q=camiseta+de+algod%C3%A3o+branca'),
('5', 'Jaqueta de Couro', 129.90,'Jaqueta de Couro','https://www.google.com/search?q=camiseta+de+algod%C3%A3o+branca');


SELECT * FROM products;

DELETE FROM products;



