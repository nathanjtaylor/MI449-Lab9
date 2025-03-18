import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(0);
  const [money, setMoney] = useState(10000);
  let [bankrupt, setBankrupt] = useState("not-bankrupt");

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.99){
        setValue(1000000)
      }
      else {
        setValue(Number(((Math.random() * 20000) - 11000).toFixed(2)));
      }
    }, 100); // Updates every 100ms

    return () => clearInterval(interval); // Cleanup function to prevent memory leaks
  }, []);

  return (
    <>
      <img className="image" src="bitcoin.png" alt="bitcoin"/>
      <h1>GET RICH QUICK</h1>
      <p>time your trading to gain money!!!</p>
      <div className="card">
        Bitcoin Value: <div className="count">{value}</div>
        Your Money: <div className="count">{money} $</div>
        <button className={bankrupt} onClick={() => {
          if (money > 0){
            setMoney(Number((money + value).toFixed(2)));
          }
          else{
            setBankrupt("bankrupt")
          }
        }}>
          Trade
        </button>
      </div>
    </>
  )
}

export default App
