import React, { useState, useEffect } from "react";

const CryptoPrice = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [selectedCurrency, setSelectedCurrency] = useState("inr"); // Default currency is INR

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${selectedCoin}&vs_currencies=${selectedCurrency}&x_cg_demo_api_key=CG-VYpeLNoNemKgpThnpgZyF59S`
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching crypto data:", error.message);
      }
    };

    fetchData();
  }, [selectedCoin, selectedCurrency]);

  const handleCoinChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className="my-8 mx-auto max-w-xl text-black p-8 bg-green-500 rounded-2xl shadow-2xl">
      <h2 className="items-center justify-center text-center mx-auto sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-8 text-white">
        Crypto Price Converter
      </h2>
      <div className="grid grid-cols-2 gap-4 mb-10 p-10 ">
        <label
          htmlFor="coin"
          className="mr-2 text-white sm:text-lg md:text-xl lg:text-2xl text-center font-bold"
        >
          Select Coin
        </label>
        <select
          id="coin"
          value={selectedCoin}
          onChange={handleCoinChange}
          className="p-2 border rounded text-lg font-bold max-h-[200px]overflow-scroll"
        >
          <option value="avalanche-2">Avalanche</option>
          <option value="binancecoin">Binance Coin</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="dogecoin">Dogecoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="filecoin">Filecoin</option>
          <option value="litecoin">Litecoin</option>
          <option value="matic-network">Polygon</option>
          <option value="polkadot">Polkadot</option>
          <option value="shiba-inu">Shiba Inu</option>
          <option value="solana">Solana</option>
          <option value="tether">Tether</option>
          <option value="uniswap">Uniswap</option>
        </select>

        <label
          htmlFor="currency"
          className="mr-2 text-white text-center sm:text-lg md:text-xl lg:text-2xl font-bold"
        >
          Select Currency
        </label>
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
      <div className="flex flex-col items-center justify-center">
        {cryptoData ? (
          <input
            className="mx-auto border-green-900 border-2 sm:text-xl md:text-2xl lg:text-3xl text-white p-2 rounded-xl text-center"
            size={27}
            disabled
            value={`${selectedCoin.toUpperCase()} : ${
              cryptoData[selectedCoin] &&
              cryptoData[selectedCoin][selectedCurrency]
                ? cryptoData[selectedCoin][selectedCurrency]
                : " "
            } ${selectedCurrency.toUpperCase()} `}
          />
        ) : (
          <p>Loading crypto data...</p>
        )}
      </div>
    </div>
  );
};

export default CryptoPrice;
