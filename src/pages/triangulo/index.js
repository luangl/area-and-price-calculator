import { useState, useMemo } from 'react';
import {useNavigate} from 'react-router-dom';
import triangulo from '../../assets/imagens/triangulo.png'
import styles from '../triangulo/index.css';

function Triangulo() {
  const navigate = useNavigate();
  const [altura, setAltura] = useState('');
  const [base, setBase] = useState('');
  const [valor, setValor] = useState('');
  const [valoor, setValoor] = useState('');
  const [addOnArea, setAddOnArea] = useState('');
  const [resultado, setResultado] = useState('');
  const [tipoCalculo, setTipoCalculo] = useState('latas');
  const [calcTotalTijolos, setCalcTotalTijolos] = useState('0');
  const [calcTotalLatas, setCalcTotalLatas] = useState('0');
    const [precoLataTinta, setPrecoLataTinta] = useState('');
  const [precoTijolo, setPrecoTijolo] = useState('');
  const [coberturaPorLata, setCoberturaPorLata] = useState(10);

  const handleOnClickVolta = () => navigate('/');

  const [isInputVisible, setIsInputVisible] = useState(true);

  const handleCheckboxChange = (e) => {
    if (e.target.value === 'nao') {
      setIsInputVisible(false);
      setAddOnArea('');
    } else {
      setIsInputVisible(true);
    }
  };


  const calcArea = useMemo(() => {
    const resTemp = (base * altura) / 2;
    const valorPercentual = addOnArea ? (resTemp * addOnArea) / 100 : 0;
    const resTotal = addOnArea ? resTemp + valorPercentual : 0;
    setResultado(addOnArea ? resTotal : resTemp);
    return addOnArea ? resTotal : resTemp;
  }, [altura, base, addOnArea]);
  
  const calcPreco = useMemo(() => {
    return (resultado * valor  * valoor).toFixed(2);
}, [valor, valoor, resultado]);

  const calcLatas = useMemo(() => {
    const qtdLatas = Math.ceil(calcArea / coberturaPorLata * valor).toFixed(0);
    return qtdLatas;
  }, [calcArea, valor, coberturaPorLata]);

  const calcTijolos = useMemo(() => {
    const COBERTURA_POR_LATA = 23; // Área em m² coberta por uma lata de tinta
    const qtdLatas = Math.ceil(calcArea * COBERTURA_POR_LATA * valor).toFixed(0); // Arredonda para cima a quantidade de latas necessárias
    return qtdLatas;
  }, [calcArea, valor]);

  const totalValue = useMemo(() => {
    if (tipoCalculo === 'latas') {
      const totalLatas = calcLatas * precoLataTinta;
      return (totalLatas + parseFloat(calcPreco)).toFixed(2);
    } else if (tipoCalculo === 'tijolos') {
      const totalTijolos = calcTijolos * precoTijolo;
      return (totalTijolos + parseFloat(calcPreco)).toFixed(2);
    }
  }, [tipoCalculo, calcLatas, calcTijolos, calcPreco, precoLataTinta, precoTijolo]);

  const options = [
    { value: 'latas', label: 'Latas de Tinta' },
    { value: 'tijolos', label: 'Tijolos' }
  ];

    return (
      <><div>
        <header className='cabecalhoheader'>
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
            <h2>Triângulo</h2>
            <img src={triangulo} alt="error1" title="Circulo" className="Circulo" />
          </div>
          <div>
            <div className='inputField'>
              <h3>
                Base (b)</h3>
              <input className='input' type="number" value={base} onChange={e => setBase(e.target.value)} name="altura" />

            </div>
            <div className='inputField'>
              <h3>Altura (h)</h3>
              <input className='input' type="number" value={altura} onChange={e => setAltura(e.target.value)} name="largura" />

            </div>

            
            <div className='inputField'>
              <h3>Área: {calcArea}m²</h3>
            </div>
            <div id="acrescimo">
                      <div className='inputField'>
      <h3 id='utilizar'>Utilizar Acréscimo de percentual de Área</h3>
      <div id="check">
      <label>
        <input
        id='inputs'
          type="checkbox"
          value="sim"
          checked={isInputVisible}
          onChange={handleCheckboxChange}
        />
      <h3 id='textocheck'>Sim</h3>
      </label>

      <label>
        <input
        id='inputs'
          type="checkbox"
          value="nao"
          checked={!isInputVisible}
          onChange={handleCheckboxChange}
        />
        <h3 id='textocheck'>Não</h3>
      </label>
      </div>
      </div>

      {isInputVisible && (
        <div  className='inputField'>
          <h3>Acréscimo em %:</h3>
          <input
            className='input'
            type="number"
            value={addOnArea}
            onChange={(e) => setAddOnArea(e.target.value)}
            name="addOnArea"
          />
        </div>
      )}
    </div>
            <div className='inputField'>
              <h3>Quantidade:</h3>
              <input className='input' type="number" value={valor} onChange={e => setValor(e.target.value)} name="altura" />
            </div>
            <div className='inputField'>
                    <h3>Valor Pelo Serviço (por m²): R$</h3>
                    <input className='input' type="number" value={valoor} onChange={e => setValoor(e.target.value)} name="valor" />
                    </div>
            <div className='inputField'>
              <h3>Valor: R${calcPreco}</h3>
            </div>
            <div className='inputField'>
              <div className='selecionar' >
              <h3 id='lata2l'>Escolha o material para orçamento:</h3>
              <select
                className='select'
                value={tipoCalculo}
                onChange={(e) => setTipoCalculo(e.target.value)}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              </div>
            </div>
            {tipoCalculo === 'latas' ? (
              <><div className='inputField'>
                <h3 id='lata3l'>Valor Unitário da Lata de Tinta de 5L: R$</h3>
                <input className='input' type="number" value={precoLataTinta} onChange={e => setPrecoLataTinta(e.target.value)} name="precoLataTinta" />
              </div><div className='inputField'>
                  <h3 id='lata3l'>Área coberta por uma lata de tinta (m²):</h3>
                  <input
                    className='input'
                    type="number"
                    value={coberturaPorLata}
                    onChange={e => setCoberturaPorLata(e.target.value)}
                    name="coberturaPorLata" />
                </div></>
            ) : (
              <div className='inputField'>
                <h3>Valor Unitário do Tijolo: R$</h3>
                <input className='input' type="number" value={precoTijolo} onChange={e => setPrecoTijolo(e.target.value)} name="precoTijolo" />
              </div>
            )}
            <div className='inputField'>
              <h3>Resultado:</h3>
              <div>
                {tipoCalculo === 'latas' && (
                  <>
                    <h3 id='lata5l'>{`Quantidade de Latas de Tinta de 5L: ${calcLatas}`}</h3>
                    <h3>{`Total: R$${totalValue}`}</h3>
                  </>
                )}
                {tipoCalculo === 'tijolos' && (
                  <>
                    <h3>{`Quantidade de Tijolos: ${calcTijolos}`}</h3>
                    <h3>{`Total: R$${totalValue}`}</h3>
                  </>
                )}
              </div>
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
  
  export default Triangulo;