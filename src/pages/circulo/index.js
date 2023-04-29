import { useState, useMemo } from 'react';
import {useNavigate} from 'react-router-dom';
import styles from '../circulo/index.css';
import circulo from '../../assets/imagens/icone-cercle-noir.png';


function Circulo() {
  const navigate = useNavigate();
  const [raio, setRaio] = useState('');
  const [valor, setValor] = useState('');
  const [addOnArea, setAddOnArea] = useState('');
  const [resultado, setResultado] = useState('');

  const handleOnClickVolta = () => navigate('/');

  const calcArea = useMemo(() => {
    const pi = 3.14
    const resTemp = (raio * raio) * pi;
    const valorPercentual = addOnArea ? (resTemp * addOnArea) / 100 : 0;
    const resTotal = addOnArea ? resTemp + valorPercentual : 0;
    setResultado(addOnArea ? resTotal : resTemp);
    return addOnArea ? resTotal : resTemp;
  }, [raio, addOnArea]);
  
  const calcPreco = useMemo(() => {
      return resultado * valor;
  }, [valor, resultado]);

  const calcLatas = useMemo(() => {
    const COBERTURA_POR_LATA = 10; // Área em m² coberta por uma lata de tinta
    const qtdLatas = Math.ceil(calcArea / COBERTURA_POR_LATA * valor); // Arredonda para cima a quantidade de latas necessárias
    return qtdLatas;
  }, [calcArea, valor]);
  


    return (
      <><div>
        <header>
          <div className='cabecalho'>
            <h1 className='titlecapf'>C.A.P.F</h1>
            <h1 className='title'>Calculadora de Área e Preço por Figura</h1>
            <div className='botao'>
              <button className='btn-back' onClick={handleOnClickVolta}>
                {'ESCOLHER OUTRA FIGURA'}
              </button>
            </div>
          </div>
        </header>
        <div className='container'>
          <div className='circulo'>
            <h2>Circulo</h2>
            <img src={circulo} alt="error1" title="Circulo" className="Circulo" />
          </div>
          <div>
            <div className='inputField'>
              <h3>Raio em metros:</h3>
              <input type="text" value={raio} onChange={e => setRaio(e.target.value)} name="altura" />
            </div>
            <div className='inputField'>
              <h3>Acréscimo de percentual de Área:</h3>
              <input type="text" value={addOnArea} onChange={e => setAddOnArea(e.target.value)} name="addOnArea" />
            </div>
            <div className='inputField'>
              <div className='areaa'>
                <h3>Área: {calcArea}m²

                </h3>
              </div>
            </div>
            <div className='inputField'>
              <h3>
                Quantidade:
              </h3>
              <input type="text" value={valor} onChange={e => setValor(e.target.value)} name="altura" />
            </div>
            <div className='inputField'>
              <h3>
                Valor: R$ {calcPreco}
              </h3>
            </div>
            <div className='inputField'>
              <h3>
                Latas de tinta necessárias: {calcLatas}
              </h3>
            </div>
          </div>
        </div>
      </div><footer id='avalie'>
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
  
  export default Circulo;