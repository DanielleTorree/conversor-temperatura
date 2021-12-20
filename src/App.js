import React from 'react';
import './index.css';
import TemperatureConverter from './components/TemperatureConverter';

function App() {
  return (
    <div className="temperatureConverter">
      <header className="titulo">Conversor de temperatura</header>
      <main>
        <TemperatureConverter />
      </main>
    </div>
  );
}

export default App;
