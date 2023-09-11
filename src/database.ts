import { Products,Users } from './types';


 export const  users: Users[] = [
    {
        id: 1,
        name:"Fulano",
        email : "<fulano@email.com",
        password : "fulano123",
        createdAt : new Date().toISOString()
    },
    {
        id: 2 ,
        name :"Ciclano" ,
        email :"<ciclano<EMAIL>",
        password : "<PASSWORD>" ,
        createdAt :new Date().toISOString(),
    }
]

export const products: Products[]= [
    {
        id: 3,
        name:'Notebook',
        price: "R$59876",
        description: 'color black.',
        imageUrl: '/images/notebook.svg'
    },
    {
        id:4,name:'Smartphone',
        price: "$1000 ",
        description: 'color Blue.' ,
        imageUrl: "/images/smartphone.png"
    },
] 