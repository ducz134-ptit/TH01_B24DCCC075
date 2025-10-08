import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [rates, setRates] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(null);


  useEffect(() => {
    async function fetchRates() {
      try {
        const response = await axios.get(`https://open.er-api.com/v6/latest/${baseCurrency}`);
        setRates(response.data.rates);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu tỉ giá:', error);
      }
    }

    fetchRates();
  }, [baseCurrency]);

  useEffect(() => {
    if (rates && rates[targetCurrency]) {
      const result = amount * rates[targetCurrency];
      setConvertedAmount(result.toFixed(2));
    }
  }, [amount, targetCurrency, rates]);

 
  const currencyOptions = Object.keys(rates);

  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: '1rem' }}>
      <h2>💱 Currency Converter</h2>

      <div>
        <label>Số tiền:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          style={{ marginLeft: '1rem' }}
        />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label>Tiền gốc:</label>
        <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)} style={{ marginLeft: '1rem' }}>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label>Quy đổi sang:</label>
        <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)} style={{ marginLeft: '1rem' }}>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {convertedAmount && (
          <h3>
            ✅ {amount} {baseCurrency} = {convertedAmount} {targetCurrency}
          </h3>
        )}
      </div>
    </div>
  );
}

export default App;
