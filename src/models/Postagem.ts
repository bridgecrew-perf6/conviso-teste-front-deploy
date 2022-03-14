import Tema from './Tema'

interface Postagem{
    id: number;
    titulo: string;
    autor: string;
    sinopse: string;
    preco: string;
    foto: string;
    categoria?: Tema| null
}

export default Postagem;