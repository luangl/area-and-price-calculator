import quadrado  from '../../assets/imagens/Quadrado-Formas-PNG.png'
import retangulo  from '../../assets/imagens/retangulo.png'
import circulo  from '../../assets/imagens/icone-cercle-noir.png'
import trapesio  from '../../assets/imagens/trapesio.png'
import triangulo  from '../../assets/imagens/triangulo-equilatero-8.png'
import {useNavigate} from 'react-router-dom';
import '../home/index.css';

function Home() {

    const navigate = useNavigate();

    const handleOnClickQuadrado = () => navigate('/quadrado');
    const handleOnClickRetangulo = () => navigate('/retangulo');
    const handleOnClickCirculo = () => navigate('/circulo');
    const handleOnClickTrapesio = () => navigate('/trapesio');
    const handleOnClickTriangulo = () => navigate('/triangulo');

  return (
    <div className='bodyt'>
      <header id='headerhome'><h1 id='title' className='title'>C.A.P.F-(Calculadora de Área e Preço por Figura)</h1>
      <div className='refs'>
      <a className='refscolor' href='#'><h1>SELECIONE A FIGURA</h1></a>
      <a className='refscolor' href='#avalie'><h1>AVALIE NOSSO SERVIÇO</h1></a>
      </div>
      </header>
      <h2 id='figuras' className='texto'> SELECIONE A FIGURA GEOMÉTRICA </h2>
      <div className="container-home">
  <div className="card" onClick={handleOnClickQuadrado}>
    <img src={quadrado} alt="Quadrado" className="image" />
    <h2>Quadrado</h2>
    <p>Figura geométrica com quatro lados iguais e quatro ângulos retos.</p>
  </div>
  <div className="card" id="ret" onClick={handleOnClickRetangulo}>
    <img src={retangulo} alt="Retângulo" className="image" />
    <h2>Retângulo</h2>
    <p>Figura geométrica com quatro lados e quatro ângulos retos. Os lados opostos são congruentes.</p>
  </div>
  <div className="card" onClick={handleOnClickCirculo}>
    <img src={circulo} alt="Círculo" className="image" />
    <h2>Círculo</h2>
    <p>Figura geométrica definida como o conjunto de pontos em um plano que estão a uma mesma distância de um ponto fixo.</p>
  </div>
  </div>
  <div className="container-second-row">
  <div className="card" onClick={handleOnClickTrapesio}>
    <img src={trapesio} alt="Trapézio" className="image" />
    <h2>Trapézio</h2>
    <p>Figura geométrica plana com quatro lados e dois lados paralelos.</p>
  </div>
  <div className="card" onClick={handleOnClickTriangulo}>
    <img src={triangulo} alt="Triângulo" className="image" />
    <h2>Triângulo</h2>
    <p>Figura geométrica plana com três lados e três ângulos internos.</p>
  </div>
  </div>
</div>
  );
}

export default Home;
