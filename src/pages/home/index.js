import quadrado from '../../assets/imagens/Quadrado-Formas-PNG.png';
import retangulo from '../../assets/imagens/retangulo.png';
import circulo from '../../assets/imagens/icone-cercle-noir.png';
import trapesio from '../../assets/imagens/trapesio.png';
import triangulo from '../../assets/imagens/triangulo-equilatero-8.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../home/index.css';

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnClickQuadrado = () => navigate('/quadrado');
  const handleOnClickRetangulo = () => navigate('/retangulo');
  const handleOnClickCirculo = () => navigate('/circulo');
  const handleOnClickTrapesio = () => navigate('/trapesio');
  const handleOnClickTriangulo = () => navigate('/triangulo');

  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  };

  document.querySelectorAll('.scroll-link').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      smoothScroll(target);
    });
  });

  const handleFilterChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const cards = [
    {
      id: 1,
      title: 'Quadrado',
      image: quadrado,
      onClick: handleOnClickQuadrado,
    },
    {
      id: 2,
      title: 'Retângulo',
      image: retangulo,
      onClick: handleOnClickRetangulo,
    },
    {
      id: 3,
      title: 'Círculo',
      image: circulo,
      onClick: handleOnClickCirculo,
    },
    {
      id: 4,
      title: 'Trapézio',
      image: trapesio,
      onClick: handleOnClickTrapesio,
    },
    {
      id: 5,
      title: 'Triângulo',
      image: triangulo,
      onClick: handleOnClickTriangulo,
    },
    {
      id: 6,
      title: 'Triângulo',
      image: triangulo,
      onClick: handleOnClickTriangulo,
    },
  ];

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <><div className="bodyt">
      <header id="headerhome">
        <h1 id="title" className="titlecapf">
          C.A.P.F
        </h1>
        <h1 className="title">
          Calculadora de Área e Preço por Figura
        </h1>
        <div className="refs">
          <a className="refscolor scroll-link" href="#title">
            <h1 className="refstext">SELECIONE A FIGURA</h1>
          </a>
          <a className="refscolor scroll-link" href="#avalie">
            <h1 className="refstext">AVALIE NOSSO SERVIÇO</h1>
          </a>
        </div>
      </header>
      <h2 id="figuras" className="texto">
        CLIQUE NA FIGURA GEOMÉTRICA DESEJADA
      </h2>
      <div className="container-input">
        <form class='search'>
        <button class='search__btn'>
          <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        <input
          className='search__input'
          type="text"
          placeholder="Buscar Figura"
          value={searchTerm}
          onChange={handleFilterChange} />
          </form>
      </div>
      <div className="container-home">
        {filteredCards.map((card) => (
          <div className="card" key={card.id} onClick={card.onClick}>
            <img src={card.image} alt={card.title} className="image" />
            <h2>{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
    <div className='separar'></div>
    <footer id='avalie'>
        <div>
          <a href='https://forms.gle/CJqewkoxvPUsE96h7'> 
          <h3>AVALIE NOSSO SERVIÇO!</h3>
          </a>
          <div className='rodape'>
            
            </div>
        </div>
      </footer></>
  );
}

export default Home;