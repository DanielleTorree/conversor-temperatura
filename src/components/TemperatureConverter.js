import React, { useState } from 'react';

const TemperatureConverter = () => {
    const [temperature, setTemperature] = useState('');
    const [option, setOption] = useState('');
    
    const handleTemperature = (value) => {
        if(value === '.' && temperature.includes('.')){
            return false;
        }
        if(value === '-' && temperature === ''){
            setTemperature(value);
            return true;
        }
        if(value === '.' && (temperature === '' || temperature === '-')){
            console.log('aqui')
            setTemperature(temperature + '0.');
            return true;
        }
        if(value !== '-'){
            setTemperature(temperature + value);
        }
    }

    const handleBackSpace = () => {
        let temp = temperature.slice(0, -1);
        setTemperature(temp);
    }

    function checaValor(){
        console.log(option)
    }

    return(
        <>
            <aside className="areaResultado">
                <input id="user-temp" defaultValue={temperature} />
                <select id="user-choice">
                    <option value={() => setOption('C')}>Celsius</option>
                    <option value={() => setOption('F')}>Fahrenheit</option>
                    <option value={() => setOption('K')}>Kelvin</option>
                </select>
                <div className="result" id="celsius-temp">
                &nbsp;
                </div>
                <span>
                    <sup>o</sup>C
                </span>
                <div className="result" id="fahrenheit-temp">
                &nbsp;
                </div>
                <span>
                    <sup>o</sup>F
                </span>
                <div className="result" id="kelvin-temp">
                &nbsp;
                </div>
                <span>
                    <sup>o</sup>K
                </span>
                <button onClick={() => checaValor()} className="tecla" id="converter">
                    Converter
                </button>
            </aside>
            <aside className="areaTeclas">
                <button onClick={() => handleTemperature('1')} className="n1 tecla">1</button>
                <button onClick={() => handleTemperature('2')} className="n2 tecla">2</button>
                <button onClick={() => handleTemperature('3')} className="n3 tecla">3</button>
                <button onClick={() => handleTemperature('4')} className="n4 tecla">4</button>
                <button onClick={() => handleTemperature('5')} className="n5 tecla">5</button>
                <button onClick={() => handleTemperature('6')} className="n6 tecla">6</button>
                <button onClick={() => handleTemperature('7')} className="n7 tecla">7</button>
                <button onClick={() => handleTemperature('8')} className="n8 tecla">8</button>
                <button onClick={() => handleTemperature('9')} className="n9 tecla">9</button>
                <button onClick={() => handleTemperature('0')} className="n0 tecla">0</button>
                <button onClick={() => handleTemperature('.')} className="virgula tecla">.</button>
                <button onClick={() => handleBackSpace()} className="limpa tecla">Delete</button>
                <button onClick={() => handleTemperature('-')} className="negativo tecla">-</button>
                <div className="reset tecla">Nova conversão</div>
            </aside>
        </>
    );
}

export default TemperatureConverter;