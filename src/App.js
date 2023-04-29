import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from './App.css';

import Home from './pages/home'
import Quadrado from './pages/quadrado';
import Triangulo from './pages/triangulo';
import Retangulo from './pages/retangulo';
import Trapesio from './pages/trapesio';
import Circulo from './pages/circulo';

function App() {
  return (
    <div>
    <><BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quadrado" element={<QuadradoCard />} />
        <Route path="/triangulo" element={<TrianguloCard />} />
        <Route path="/retangulo" element={<RetanguloCard />} />
        <Route path="/trapesio" element={<TrapesioCard />} />
        <Route path="/circulo" element={<CirculoCard />} />
      </Routes>
    </BrowserRouter>
    <footer id='avalie'>
        <div>
          <a href='https://forms.gle/CJqewkoxvPUsE96h7'> 
          <h3>AVALIE NOSSO SERVIÇO!</h3>
          </a>
          <div className='rodape'>
            
            </div>
        </div>
      </footer></>
      </div>
  );
}

// Componentes de Card para cada página
function QuadradoCard() {
  return (
    <div className="container">
      <div class="item"><Quadrado /></div>
    </div>
  );
}

function TrianguloCard() {
  return (
    <div className="item">
      <Triangulo />
    </div>
  );
}

function RetanguloCard() {
  return (
    <div className="item">
      <Retangulo />
    </div>
  );
}

function TrapesioCard() {
  return (
    <div className="item">
      <Trapesio />
    </div>
  );
}

function CirculoCard() {
  return (
    <div className="item">
      <Circulo />
    </div>
  );
}

export default App;
