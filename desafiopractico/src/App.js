import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Formulario from "./components/Formulario";
import Convertidor from "./components/Convertidor";
import Menu from "./components/Menu";
import {Row, Col, Form, Input, Label} from 'reactstrap';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1>Menú de Opciones</h1>
        <Menu></Menu>
        <Routes>
          <Route path="/formulario" element={<Formulario/>}></Route>
          <Route path="/convertidor" element={<Convertidor/>}></Route>
        </Routes>
      </div>
    </Router>




    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
