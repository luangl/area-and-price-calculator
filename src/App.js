import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from './App.css';

import Home from './pages/home'
import Quadrado from './pages/quadrado';
import Triangulo from './pages/triangulo';
import Retangulo from './pages/retangulo';
import Trapesio from './pages/trapesio';
import Circulo from './pages/circulo';
import Paralelogramo from './pages/paralelogramo';
import { Analytics } from '@vercel/analytics/react';

function App({Component, pageProps}) {
  return (
    <><BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quadrado" element={<QuadradoCard />} />
        <Route path="/triangulo" element={<TrianguloCard />} />
        <Route path="/retangulo" element={<RetanguloCard />} />
        <Route path="/trapesio" element={<TrapesioCard />} />
        <Route path="/circulo" element={<CirculoCard />} />
        <Route path="/paralelogramo" element={<ParalelogramoCard />} />
      </Routes>
    </BrowserRouter><Analytics /></>
  );
}

// Componentes de Card para cada página
function QuadradoCard() {
  return (
      <div className='item'>
        <Quadrado />
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

function ParalelogramoCard() {
  return (
    <div className="item">
      <Paralelogramo />
    </div>
  );
}

export default App;
