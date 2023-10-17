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
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
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

DROP TABLE products;

--Exercício 1
--Agora que sabemos como implementar relações do tipo 1:m e 1:1, vamos refatorar a estrutura do Labecommerce!
--Por ora não precisaremos editar as tabelas já existentes (users e products). Nosso objetivo hoje é criar a tabela de pedidos (purchases).

CREATE TABLE purchases(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    buyer TEXT NOT NULL,
    total_price REAL NOT NULL,
    created_ad TEXT NOT NULL,
    FOREIGN KEY (buyer) REFERENCES users(id)
);


SELECT * FROM purchases;

--Exercício 2

-- a) Crie um pedido para cada pessoa cadastrada
-- no mínimo 2 no total (ou seja, na tabela users deve existir pelo menos 2 pessoas diferentes)
-- escolha um valor aleatório para o preço total do pedido e a data em texto



INSERT INTO purchases(id,buyer,total_price,created_ad)
VALUES ('U001','01', 100, DATETIME());

INSERT INTO purchases(id, buyer, total_price, created_ad)
VALUES('U002', '02', 150, '2023-10-07');
INSERT INTO purchases(id, buyer, total_price, created_ad)
VALUES('U003', '03', 190, '2023-10-07');

-- b) Edite o preço total do pedido (só pra praticar)
-- simule que o pedido foi alterado e o preço total diminuiu ou aumentou

UPDATE purchases 
SET total_price = total_price + 20
WHERE id='U001';

-- Exercício 3
-- Crie a query de consulta utilizando junção (SELECT com JOIN) para simular um endpoint de informações de uma compra específica.

DROP TABLE purchases;



SELECT 
users.id AS UsuarioId, purchases.id AS purchasesId, users.name AS nome, users.email AS email, purchases.total_price AS preço_total, purchases.created_ad AS Data
 FROM purchases
INNER JOIN users
ON purchases.buyer_id = users.id ;
-- a relação fica na coluna creator_id da tabela recipes,
-- que referencia a coluna id da tabela users

--relacoes-sql-II-exercicios
--exercicio1.md

CREATE TABLE purchases_products(
    purchases_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INT NOT NULL ,
    FOREIGN KEY (purchases_id ) REFERENCES purchases(id),
    FOREIGN KEY (product_id ) REFERENCES products(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
    );

    INSERT INTO purchases_products
    VALUES
    ('1', '4', 4 ), ('2', '2', 5), ('3', '3', 7);

    SELECT
    PP.purchases_id,
    PP.product_id,
    PP.quantity,
    c.buyer_id,
    c.total_price FROM purchases_products AS PP
    INNER JOIN PURCHASES AS C ON PP.purchases_id = C.id
    INNER JOIN products AS P ON PP.product_id = P.id;
SELECT * FROM purchases_products;

DROP TABLE purchases_products;


