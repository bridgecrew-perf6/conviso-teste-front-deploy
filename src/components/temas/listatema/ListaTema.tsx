import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Typography, TableContainer, Paper, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import './ListaTema.css';
import { useHistory } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import Categoria from '../../../models/Categoria';
import SearchBar from 'material-ui-search-bar';
import ModalTema from '../modalTema/ModalTema';
import { Container } from 'react-bootstrap';

function ListaTema() {
  const [temas, setTemas] = useState<Categoria[]>([])
  let history = useHistory();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token === '') {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      history.push("/login")
    }
  }, [token])


  async function getTema() {
    await busca("/posts", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  function getTemaSync() {
    busca("/posts", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }


  // useEffect(() => {
  //   getTema()
  // }, [temas.length])

  useEffect(() => {
    getTema()
  }, [])

  // const [rows, setRows] = useState<Categoria[]>originalRows
  const [searched, setSearched] = useState<string>("");

  const requestSearch = (searchedVal: string) => {
    const filteredRows = temas.filter((row) => {
      return row.categoria.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setTemas(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
    getTema();
  };

  const requestSearchByNivel = (searchedVal: string) => {
    const filteredRows = temas.filter((row) => {
      return row.nivel.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setTemas(filteredRows);
  };

  return (
    <>

      <Paper className="paper-main">


        <SearchBar
          value={searched}
          placeholder={'Busca por título'}
          onChange={(searchVal) => requestSearch(searchVal)}
          onRequestSearch={() => getTema()}
          onCancelSearch={() => cancelSearch()}
        />

        <Container className='container-main'>

          <ModalTema />


          <Typography color="textSecondary" component="h2" >BUSCAR POR NÍVEL DE SEVERIDADE:</Typography>

          <Container id='severity-container'>
            <Button
              onClick={() => requestSearchByNivel('low')}
            >
              low
            </Button>

            <Button
              onClick={() => requestSearchByNivel('min')}
            >
              min
            </Button>

            <Button
              onClick={() => requestSearchByNivel('high')}
            >
              high
            </Button>
          </Container>



        </Container>

        <Container>
          <Button
            onClick={() => getTema()}
            fullWidth
          >
            reset de listagem
          </Button>
        </Container>



        <TableContainer component={Paper}>

          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Título</TableCell>
                <TableCell align="right">descrição</TableCell>
                <TableCell align="right">nível</TableCell>
                <TableCell align="right">tipo</TableCell>
                <TableCell align="right">evidência</TableCell>
                <TableCell align="right">proposta</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {
                temas.map(tema => (
                  <TableRow key={tema.categoria}>
                    <TableCell component="th" scope="row">{tema.categoria}</TableCell>
                    <TableCell align="right">{tema.descricaoCategoria}</TableCell>
                    <TableCell align="right">{tema.nivel}</TableCell>
                    <TableCell align="right">{tema.tipo}</TableCell>
                    <TableCell align="right">{tema.evidencia}</TableCell>
                    <TableCell align="right">{tema.solucao}</TableCell>

                    <Box display="flex" justifyContent="center" mb={1.5} >
                      <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                        <Box mx={1}>
                          <Button variant="contained" className="marginLeft" size='small' color="primary" >
                            atualizar
                          </Button>
                        </Box>
                      </Link>
                      <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                        <Box mx={1}>
                          <Button variant="contained" size='small' color="secondary">
                            deletar
                          </Button>
                        </Box>
                      </Link>
                    </Box>

                  </TableRow>

                ))
              }
            </TableBody>

          </Table>

        </TableContainer>

      </Paper>
    </>
  );
}


export default ListaTema;