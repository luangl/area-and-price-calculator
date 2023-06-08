import quadrado from '../../assets/imagens/Quadrado-Formas-PNG.png';
import retangulo from '../../assets/imagens/retangulo.png';
import circulo from '../../assets/imagens/icone-cercle-noir.png';
import trapezio from '../../assets/imagens/trapesio.png';
import triangulo from '../../assets/imagens/triangulo-equilatero-8.png';
import paralelogramo from '../../assets/imagens/paralelogramo.png';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../home/index.css';

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnClickQuadrado = () => navigate('/quadrado');
  const handleOnClickRetangulo = () => navigate('/retangulo');
  const handleOnClickCirculo = () => navigate('/circulo');
  const handleOnClickTrapezio = () => navigate('/trapesio');
  const handleOnClickTriangulo = () => navigate('/triangulo');
  const handleOnClickParalelogramo = () => navigate('/paralelogramo');

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

  const panels = document.querySelectorAll('.faq__panel')
			const panelLabels = document.querySelectorAll('.faq__label')
			panels.forEach((panel, index) => {
				let isExpanded = panel.getAttribute('aria-expanded') === 'true'

				panelLabels[index].addEventListener('click', () => {
					console.log('clicked')
					isExpanded = !isExpanded
					panel.setAttribute('aria-expanded', isExpanded)
				})
			})

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
      image: trapezio,
      onClick: handleOnClickTrapezio,
    },
    {
      id: 5,
      title: 'Triângulo',
      image: triangulo,
      onClick: handleOnClickTriangulo,
    },
    {
      id: 6,
      title: 'Paralelogramo',
      image: paralelogramo,
      onClick: handleOnClickParalelogramo,
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
          <a className="refscolor scroll-link" href="#faq">
            <h1 className="refstext">PERGUNTAS FREQUENTES</h1>
          </a>
          <a className="refscolor scroll-link" href="#avalie">
            <h1 className="refstext">AVALIE NOSSO SERVIÇO</h1>
          </a>
          <a className="refscolor scroll-link" href=".final">
            <h1 className="refstext">SIGA NOSSO INSTAGRAM</h1>
          </a>
        </div>
      </header>
      <div class="faq__header_se">
      <h2 id="figuras" className="texto">
        CLIQUE NA FIGURA GEOMÉTRICA DESEJADA
      </h2>
      </div>
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
    <div class="separar" id="faq"></div>
    <section class="faq container" aria-label="Frequently Asked Questions">
    <div class="faq__header">
				<h2 class="faq__header-title">PERGUNTAS FREQUENTES</h2>
			</div>
			<div class="faq__body">
				<details aria-expanded="true" class="faq__panel" open>
					<summary class="faq__label">Como calcular preço?</summary>
					<div class="faq__panel-body">
						<p class="faq__panel-answer">
							Selecione uma das figuras que deseja calcular e coloque as medidas necessárias, a quantidade e assim o valor aparecerá automaticamente!
						</p>
					</div>
				</details>
				<details aria-expanded="false" class="faq__panel">
					<summary class="faq__label">
						Como calcular área?
					</summary>
					<div class="faq__panel-body">
						<p class="faq__panel-answer">
							Para calcular a área, deve ser escolhido uma das figuras e depois colocar todas as medidas necessárias para o calculo da área daquela figura, assim o valor da área aparecerá automaticamente!
						</p>
					</div>
				</details>
				<details aria-expanded="false" class="faq__panel">
					<summary class="faq__label">
						Como seleciono a figura?
					</summary>
					<div class="faq__panel-body">
						<p class="faq__panel-answer">
							Para escolher uma das figuras, basta apenas clicar nela ou para ficar mais fácil, você pode clicar no icone de lupa no começo do site e pesquisar pela figura desejada.
						</p>
					</div>
				</details>
				<details aria-expanded="false" class="faq__panel">
					<summary class="faq__label">Como mudo o material?</summary>
					<div class="faq__panel-body">
						<p class="faq__panel-answer">
							Depois de escolhido a figura desejada e ter preenchido corretamente as medidas necessárias para calcular a área, terá um botão com as opções de materiais de construção para você escolher e assim o cálculo do valor para a área necessária do material desejado aparecerá automaticamente!
						</p>
					</div>
				</details>
			</div>
		</section>
    <div class="arru" id='avalie'></div>
    <footer>
        <div>
          <div class="oii">
          <a> 
          <h3>AVALIE NOSSO SERVIÇO!</h3>
          </a>
          </div>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSep-7W8Q4-TSLiTl7drVkHX3Mo_YedGxAGXSTyVjqdl9xVRLQ/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
          <a class="instaa" href='https://www.instagram.com/capf.2023/' target="_blank"><h1 class="insta">Siga a gente no Instagram!</h1><i class="fab fa-instagram"></i></a>
          <div className='rodape'>
            
            </div>
        </div>
      </footer>
      <div className='final'></div>
      </>
  );
}

export default Home;