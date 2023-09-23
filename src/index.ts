import { users,products,createUser,getAllUsers } from "./database";
import { searchProductsByName } from "./database";
import  express, { Request, Response} from 'express';
import cors from 'cors'
import { Products, Users } from "./types";

const app = express();

app.use(express());
app.use(cors());

app.listen(3004, ()=>{
    console.log("Servidor rodando na porta 3004"); 

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
  });
    
})
// console.log(createUser("u003", "Astrodev", "astrodev@email.com", "astrodev99"));

//  const busca = "Notebook"
//  const nomeSearch = searchProductsByName(busca)

//  console.log(getAllUsers());

//  console.table(users);
//  console.table(products);
//  console.log(nomeSearch);

 app.get('/users', (req: Request, res: Response) => {
    const result: Users[] = users
    res.status(200).send(result)
  });
 app.get('/products', (req: Request, res: Response) => {
    const nameProduct= req.query.name as string
    console.log(products);
    
    
    if(nameProduct){
        const resulta: Products[] = products.filter(
            (produto) => produto.name.toLowerCase().includes(nameProduct.toLowerCase())
            )
            res.status(200).send(resulta)
        }else{
            res.status(200).send(products)
        }
        
    });


    app.post('/users', (req: Request, res: Response) => {
        // const{id,name,email,password} : Users = req.body
         const id: string = req.body.id;
         const name: string = req.body.name;
         const email: string = req.body.email;
         const password: string = req.body.password;

        const newUsers:Users = {
            id ,
            name,
            email,
            password
        }
        users.push(newUsers)
        res.status(200).send('Usuário registrado com sucesso');
      });

      app.delete('/users/:id', (req: Request, res: Response) => {
        const userDelete = req.params.id

        const idIndex = users.findIndex((usua)=> usua.id === userDelete)

        if(idIndex !== -1){
            users.splice(idIndex, 1)
        }
        res.status(200).send("Item deletado com sucesso")
      });

      app.put('/products/:id', (req: Request, res: Response) => {
        const productID = req.params.id
        const newId = req.body.id as string | undefined
        const newName = req.body.id as string | undefined
        const newPrice = req.body.id as string | undefined
        const newDescription = req.body.id as string | undefined
        const newImageUrl = req.body.id as string | undefined

        const produtos = products.find((prod) => prod.id === productID)
        if(produtos){
            produtos.id = newId || produtos.id
            produtos.name = newId || produtos.name
            produtos.price = newId || produtos.price
            produtos.description = newId || produtos.description 
            produtos.imageUrl = newId || produtos.imageUrl

            // produtos.price = isNaN(Number(newPrice))? produtos.price : newPrice as number
        }
        res.status(200).send("Atualização realizada com sucesso")
      });