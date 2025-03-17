import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(0);
  const [money, setMoney] = useState(10000);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(Number((Math.random() * 20000 - 10500).toFixed(2)));
    }, 100); // Updates every 100ms

    return () => clearInterval(interval); // Cleanup function to prevent memory leaks
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>GET RICH QUICK!!!</h1>
      <div className="card">
        Value: <div className="count">{value}</div>
        Your Money: <div className="count">{money} $</div>
        <button onClick={() => setMoney(money => Number((money + value).toFixed(2)))}>
          Buy
        </button>
      </div>
    </>
  )
}

export default App
