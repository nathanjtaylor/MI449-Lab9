import { useState, useEffect } from 'react'
import bitcoinIcon from './assets/bitcoin.png'
import './App.css'

function TradeButton({value, money, setMoney, bankrupt, setBankrupt}) {

  return (       
    <button className={bankrupt} onClick={() => {
      if (money > 0){
        setMoney(Number((money + value).toFixed(2)));
        if (money + value < 0){
          setBankrupt("bankrupt");
        }
      }
    }}>
      Trade
    </button>
  );
}

function WorkButton({money, setMoney, setBankrupt}) {
  return (
    <button onClick={() => {
      setMoney(Number((money + 1000).toFixed(2)));
      if (money + 1000 > 0){
        setBankrupt("not-bankrupt");
      }
    }}>
      Work
    </button>
  );
}

function TradingInterface() {
  const [value, setValue] = useState(0);
  const [money, setMoney] = useState(10000);
  let [bankrupt, setBankrupt] = useState("not-bankrupt");

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.99){
        setValue(100000);
      }
      else {
        setValue(Number(((Math.random() * 20000) - 15000).toFixed(2)));
      }
    }, 100); // Updates every 100ms

    return () => clearInterval(interval); // Cleanup function to prevent memory leaks
  }, []);

  return (
    <div>
      <img className="image" src={bitcoinIcon} alt="bitcoin"/>
      <h1>GET RICH QUICK</h1>
      <p>time your trading to gain money!!!</p>
      <div className="values">
        Bitcoin Value: <div className="count">{value}</div>
        Your Money: <div className="count">{money} $</div>
      </div>
      <div className="buttons">
        <TradeButton value={value} money={money} setMoney={setMoney} bankrupt={bankrupt} setBankrupt={setBankrupt}/>
        <WorkButton money={money} setMoney={setMoney} setBankrupt={setBankrupt}/>
      </div>

    </div>
  );
}

function NewsHeadlinesTitle() {
  return (
    <h2>News Headlines</h2>
  );
}

function NewsHeadlines() {
  const headlines = import.meta.env.VITE_REACT_APP_NEWS_HEADLINES.split(",");
  const [displayHeadlines, setDisplayHeadlines] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * headlines.length);
      setDisplayHeadlines((prevHeadlines) => [...prevHeadlines, headlines[randomIndex]]);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='news'>
      <ul>
        {displayHeadlines.map((headline, index) => (
          <li className='headline' key={index}><strong>{headline}</strong></li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TradingInterface/>
      <div>
        <NewsHeadlinesTitle/>
        <NewsHeadlines/>
      </div>
    </div>
  )
}

export default App


/*
SOURCES
ChatGPT 4.0(Open AI)
For News Headlines:
- https://www.newsnow.com/us/Business/Cryptocurrencies/Bitcoin
- https://www.fastcompany.com/91284442/crypto-crash-today-why-bitcoin-doge-trump-xrp-falling-prices
-https://economictimes.indiatimes.com/news/international/us/why-is-bitcoin-crashing-below-90000-inside-the-biggest-crypto-selloff-trumps-trade-tariffs-and-a-1-5-billion-hack/articleshow/118563073.cms
*/