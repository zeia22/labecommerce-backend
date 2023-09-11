// estamos dentro do arquivo src/types.ts tipando um vídeo do youtube

export type Users = {
    id: number,
    name: string,
    email: string,
    password: string,
    createdAt: string;
  }

  export type Products = {
    id: number;
    name: string;
    price: string;
    description: string;
    imageUrl: string;
  }