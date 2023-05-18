import { useState, useMemo } from 'react';
import {useNavigate} from 'react-router-dom';
import trapesio from '../../assets/imagens/trapesio.png'
import styles from '../trapesio/index.css';

function Trapesio() {
  const navigate = useNavigate();
    const [altura, setAltura] = useState('');
    const [bmenor, setBMenor] = useState('');
    const [bmaior, setBMaior] = useState('');
    const [addOnArea, setAddOnArea] = useState('');
    const [valor, setValor] = useState('');
    const [resultado, setResultado] = useState('');
    const [tipoCalculo, setTipoCalculo] = useState('latas');
    const [calcTotalTijolos, setCalcTotalTijolos] = useState('0');
    const [calcTotalLatas, setCalcTotalLatas] = useState('0');


    const handleOnClickVolta = () => navigate('/');

    const calcArea = useMemo(() => {
        const resTemp = ((bmenor + bmaior) / 2) * altura;
        const valorPercentual = addOnArea ? (resTemp * addOnArea) / 100 : 0;
        const resTotal = addOnArea ? resTemp + valorPercentual : 0;
        setResultado(addOnArea ? resTotal : resTemp);
        return addOnArea ? resTotal : resTemp;
    }, [bmenor, bmaior, altura, addOnArea]);
    
    const calcPreco = useMemo(() => {
        return resultado * valor;
    }, [valor, resultado]);

    const calcLatas = useMemo(() => {
      const COBERTURA_POR_LATA = 10; // Área em m² coberta por uma lata de tinta
      const qtdLatas = Math.ceil(calcArea / COBERTURA_POR_LATA * valor).toFixed(0); // Arredonda para cima a quantidade de latas necessárias
      return qtdLatas;
    }, [calcArea, valor]);
  
    const calcTijolos = useMemo(() => {
      const COBERTURA_POR_LATA = 23; // Área em m² coberta por uma lata de tinta
      const qtdLatas = Math.ceil(calcArea * COBERTURA_POR_LATA * valor).toFixed(0); // Arredonda para cima a quantidade de latas necessárias
      return qtdLatas;
    }, [calcArea, valor]);
    
  
      const PRECO_LATA_TINTA = 100; // Preço unitário de uma lata de tinta de 20L
  
      const PRECO_TIJOLO = 5; // Preço unitário de um tijolo
  
      function handleSelectChange(event) {
        setTipoCalculo(event.target.value);
        if (event.target.value === 'latas') {
          const qtdLatas = calcLatas / 10; // Cada lata tem 10L
          const total = (qtdLatas * PRECO_LATA_TINTA) + parseFloat(calcPreco);
          setCalcTotalLatas(total.toFixed(2));
        } else if (event.target.value === 'tijolos') {
          const total = (calcTijolos * PRECO_TIJOLO) + parseFloat(calcPreco);
          setCalcTotalTijolos(total.toFixed(2));
        }
      }
      const totalValue = useMemo(() => {
        if (tipoCalculo === 'latas') {
          const qtdLatas = calcLatas / 10; // Cada lata tem 10L
          const total = (qtdLatas * PRECO_LATA_TINTA) + parseFloat(calcPreco);
          return total.toFixed(2);
        } else if (tipoCalculo === 'tijolos') {
          const total = (calcTijolos * PRECO_TIJOLO) + parseFloat(calcPreco);
          return total.toFixed(2);
        }
      }, [tipoCalculo, calcLatas, calcTijolos, calcPreco]);
  
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
            <h2>Trapézio</h2>
            <img src={trapesio} alt="error1" title="Circulo" className="Circulo" />
          </div>
          <div>
            <div className='inputField'>
              <h3>Base menor (em metros)</h3>
                <input type="number" value={bmenor} onChange={e => setBMenor(e.target.value)} name="altura" />
                
                </div>
                <div className='inputField'>
                <h3>Base maior (em metros)</h3>
                <input type="number" value={bmaior} onChange={e => setBMaior(e.target.value)} name="largura" />
                
                </div>
                <div className='inputField'>
                <h3>Altura (em metros)</h3>
                <input type="number" value={altura} onChange={e => setAltura(e.target.value)} name="largura" />
                
                </div>
            <div className='inputField'>
              <h3>Acréscimo de percentual de Área</h3>
              <input type="number" value={addOnArea} onChange={e => setAddOnArea(e.target.value)} name="addOnArea" />
            </div>
            <div className='inputField'>
              <h3>Área: {calcArea}m²</h3>
            </div>
            <div className='inputField'>
              <h3>Quantidade:</h3>
              <input type="number" value={valor} onChange={e => setValor(e.target.value)} name="altura" />
            </div>
            <div className='inputField'>
              <h3>Valor: R$
                {calcPreco}</h3>
            </div>
            <div>
              <div className='containerinput'>
                <div className='inputField'>
                  <h3 className='inputcirculo'>
                    <label className='inputcirculotexto' htmlFor="select-calculo">Calcular em:</label>
                    <select id="select-calculo" onChange={handleSelectChange}>
                      <option value="latas">Latas de tinta de 20Litros</option>
                      <option value="tijolos">Tijolos</option>
                    </select>
                  </h3>
                  <h3>
                    {tipoCalculo === 'latas' ?
                      `${calcLatas} Latas de tinta de 1L` :
                      `${calcTijolos} unidades`}
                  </h3>
                </div>
              </div>
              <div className='inputField'>
                <h3>
                  Valor Total: R$ {totalValue}
                </h3>
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
  
  export default Trapesio;