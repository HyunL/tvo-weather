import './App.css';
import Homepage from './Homepage';
import { useState } from 'react';
import { units } from './Units';

function App() {
  const [unit, setUnit] = useState(units.CELCIUS);

  return (
    <div className="App">
      <header className="App-header">
        <h1>WEATHER 🌤️</h1>
      </header>
      <Homepage unit={unit} setUnit={setUnit} />
    </div>
  );
}

export default App;
