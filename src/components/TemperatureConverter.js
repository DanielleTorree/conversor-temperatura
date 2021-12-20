import React, { useState } from 'react';

const TemperatureConverter = () => {
    const [temperature, setTemperature] = useState('');
    const [estado, setEstado] = useState('0');
    
    const handleTemperature = (value) => {
        if(value === '.' && temperature.includes('.')){
            return false;
        }
        if(value === '-' && temperature === ''){
            setTemperature(value);
            return true;
        }
        if(value === '.' && (temperature === '' || temperature === '-')){
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

    const handleConverter = () => {
        const temp = Number(temperature);

        if(temperature === '-0'){
            setTemperature('0');
        }

        if(estado === '0'){
            alert("Selecione uma unidade de temperatura antes de continuar.");
            return;
        }
        if(temperature === ''){
            alert("Adicione uma temperatura antes de continuar.");
            return;
        }
        if(estado === '1'){
            const celsiusTemp = temp.toFixed(2);
            const fahrenheitTemp = ((temp * 9) / 5 + 32).toFixed(2);
            const kelvinTemp = (temp + 273.15).toFixed(2);

            resultado(celsiusTemp, fahrenheitTemp, kelvinTemp);
        }
        if(estado === '2'){
            const celsiusTemp = (((temp - 32)/9)*5).toFixed(2);
            const fahrenheitTemp = temp.toFixed(2);
            const kelvinTemp = (((temp - 32)*5/9)+273.15).toFixed(2);

            resultado(celsiusTemp, fahrenheitTemp, kelvinTemp);
        }
        if(estado === '3'){
            const celsiusTemp = (temp - 273.15).toFixed(2);
            const fahrenheitTemp = ((((temp - 273.15)/5)*9)+32).toFixed(2);
            const kelvinTemp = temp.toFixed(2);

            resultado(celsiusTemp, fahrenheitTemp, kelvinTemp);
        }
    }

    const resultado = (celsiusTemp = '', fahrenheitTemp = '', kelvinTemp = '') => {
        const resultCelsius = document.querySelector('#celsius-temp');
        const resultFahrenheit = document.querySelector('#fahrenheit-temp');
        const resultKelvin = document.querySelector('#kelvin-temp'); 

        resultCelsius.insertAdjacentHTML('afterbegin', celsiusTemp);
        resultFahrenheit.insertAdjacentHTML('afterbegin', fahrenheitTemp);
        resultKelvin.insertAdjacentHTML('afterbegin', kelvinTemp);
    } 

    const handleReset = () => {
        setTemperature('');
        setEstado('0');
    }

    return(
        <>
            <aside className="areaResultado">
                <input id="user-temp" defaultValue={temperature} />
                <select id="user-choice" value={estado} onChange={(valor) => setEstado(valor.target.value)}>
                    <option value='0'>Selecione</option>
                    <option value='1'>Celsius</option>
                    <option value='2'>Fahrenheit</option>
                    <option value='3'>Kelvin</option>
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
                <button  onClick={() => handleConverter()} className="tecla" id="converter">
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
                <button onClick={() => handleReset()} className="reset tecla">Nova conversão</button>
            </aside>
        </>
    );
}

export default TemperatureConverter;