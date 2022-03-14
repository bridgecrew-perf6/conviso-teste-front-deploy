import { Box, Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Categoria from "../../../models/Categoria";
import Tema from "../../../models/Tema";
import { busca, buscaId } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";


function TelaTema() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])

    const [tema, setTema] = useState<Categoria>({
        id: 0,
        categoria: '',
        descricaoCategoria: '',
        nivel: '',
        tipo: '',
        evidencia: '',
        solucao: ''
    })

    useEffect(() => {
        setTema({
            ...tema,
        })
    }, [tema])

    async function findByIdProduto(id: string) {
        await buscaId(`posts/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    return (
        <>
            <Box m={2} >
                <Card variant="outlined" className="caixa-produto">

                    <CardContent>
                        <CardMedia
                            component="img"
                            image={tema.evidencia}
                            alt={tema.categoria}
                            className="imagem-produto"
                        />

                        <Typography color="textSecondary" gutterBottom>
                            Vulnerabilidade
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {tema.categoria}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {tema.descricaoCategoria}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {tema.nivel}
                        </Typography>
                        <Typography variant="body1" component="p">
                            {tema.tipo}
                        </Typography>
                        <Typography variant="body1" component="p">
                            {tema.evidencia}
                        </Typography>
                        <Typography variant="body1" component="p">
                            {tema.solucao}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>)
}

export default TelaTema;