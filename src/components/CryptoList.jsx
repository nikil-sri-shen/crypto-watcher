import React, { useState, useEffect } from "react";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";

function CryptoList() {
  const [cryptoData, setCryptoData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("inr");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}&order=market_cap_desc&per_page=200&page=1&sparkline=false&locale=en&x_cg_demo_api_key=CG-VYpeLNoNemKgpThnpgZyF59S`
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching crypto data:", error.message);
      }
    };

    fetchData();
  }, [selectedCurrency]);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div>
      <p className="sm:text-3xl md:text-4xl lg:text-5xl font-bold m-4">
        Market Price of Cryptocurrencies
      </p>
      <div className="m-4 text-black">
        <label
          htmlFor="currency"
          className="mr-2 text-white text-center text-3xl font-bold"
        >
          Select Currency
        </label>
        <br />
        <br />
        <select
          id="currency"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
          className="p-2 border rounded text-lg font-bold"
        >
          <option value="aed">AED (United Arab Emirates Dirham)</option>
          <option value="aud">AUD (Australian Dollar)</option>
          <option value="cad">CAD (Canadian Dollar)</option>
          <option value="cny">CNY (Chinese Yuan)</option>
          <option value="eur">EUR (Euro)</option>
          <option value="gbp">GBP (British Pound Sterling)</option>
          <option value="hkd">HKD (Hong Kong Dollar)</option>
          <option value="inr">INR (Indian Rupees)</option>
          <option value="jpy">JPY (Japanese Yen)</option>
          <option value="myr">MYR (Malaysian Ringgit)</option>
          <option value="nzd">NZD (New Zealand Dollar)</option>
          <option value="rub">RUB (Russian Ruble)</option>
          <option value="sar">SAR (Saudi Riyal)</option>
          <option value="sgd">SGD (Singapore Dollar)</option>
          <option value="uah">UAH (Ukrainian Hryvnia)</option>
          <option value="usd">USD (US Dollars)</option>
        </select>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cryptoData.map((crypto) => (
          <div
            key={crypto.id}
            className={` p-4 bg-opacity-65 rounded-2xl shadow-2xl ${
              crypto.price_change_24h < 0 ? "  bg-red-500" : " bg-green-500"
            }`}
          >
            <img
              src={crypto.image}
              alt={`${crypto.name} Logo`}
              className="mx-auto mb-2"
              style={{ width: "50px", height: "50px" }}
            />
            <p className="font-bold text-2xl">{crypto.name}</p>
            <p className="font-bold text-lg">{crypto.symbol}</p>
            <p className="font-bold text-lg">
              Current Price: {crypto.current_price}{" "}
              {selectedCurrency.toUpperCase()}
              {crypto.price_change_24h < 0 ? (
                <FaLongArrowAltDown
                  className="inline text-red-900 font-extrabold"
                  size={35}
                />
              ) : (
                <FaLongArrowAltUp
                  className="inline text-green-900 font-extrabold"
                  size={35}
                />
              )}
            </p>
            <p
              className={`text-2xl font-bold ${
                crypto.price_change_24h < 0 ? "text-red-900" : "text-green-900"
              }`}
            >
              Price Change (24h): {crypto.price_change_24h.toFixed(2)}{" "}
            </p>
            <p
              className={`text-2xl font-bold ${
                crypto.price_change_24h < 0 ? "text-red-900" : "text-green-900"
              }`}
            >
              ({crypto.price_change_percentage_24h.toFixed(2)}%)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CryptoList;
