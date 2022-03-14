import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@material-ui/core';
import TelaPostagem from './components/postagens/telaPostagem/TelaPostagem';
import EdicaoTema from './components/temas/editcaoTema/EdicaoTema';

const theme = createTheme({
  palette: {
    primary: {
      light: '#f28933',
      main: '#5fb292',
      dark: '#a74b00',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5a94af',
      main: '#f50057',
      dark: '#9adcfb',
      contrastText: '#000',
    }
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 400
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <Switch>
          <div style={{ minHeight: '100vh' }}>

            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/cadastrousuario'>
              <CadastroUsuario />
            </Route>
            <Route path='/temas'>
              <ListaTema />
            </Route>

            <Route exact path='/formularioPostagem'>
              <CadastroPost />
            </Route>
            <Route exact path='/formularioPostagem/:id'>
              <CadastroPost />
            </Route>
            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>
            <Route exact path='/formularioTema/:id'>
              <EdicaoTema />
            </Route>
            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>
            <Route path='/deletarTema/:id'>
              <DeletarTema />
            </Route>
            <Route path='/telaPostagem/:id'>
              <TelaPostagem />
            </Route>

          </div>
        </Switch>
        <Footer />
      </Router>
    </Provider>
    </ThemeProvider>
  );
}

export default App;
