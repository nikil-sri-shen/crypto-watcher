import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CryptoDetails = () => {
  const [cryptoId, setCryptoId] = useState("bitcoin");
  const [cryptoDetails, setCryptoDetails] = useState(null);

  useEffect(() => {
    const fetchCryptoDetails = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${cryptoId}?x_cg_demo_api_key=CG-VYpeLNoNemKgpThnpgZyF59S`
        );
        const data = await response.json();
        setCryptoDetails(data);
      } catch (error) {
        console.error("Error fetching crypto details:", error.message);
      }
    };

    fetchCryptoDetails();
  }, [cryptoId]);

  const handleCryptoChange = (event) => {
    setCryptoId(event.target.value);
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="my-8 mx-auto max-w-xl shadow-2xl p-8 bg-green-500 rounded-2xl">
        <label
          htmlFor="crypto"
          className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
        >
          Search Cryptocurrency
        </label>
        <br />
        <br />
        <select
          id="crypto"
          value={cryptoId}
          onChange={handleCryptoChange}
          className="block w-full p-2 border border-black rounded-xl my-2 text-black font-bold"
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

        {cryptoDetails && (
          <div className="text-center">
            <h2 className="sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              {cryptoDetails.name}
            </h2>
            <br />
            <label className="font-bold sm:text-base md:text-xl lg:text-2xl">
              Symbol
            </label>
            <p className="text-gray-700 font-bold sm:text-base md:text-xl lg:text-2xl">
              {cryptoDetails.symbol}
            </p>
            <img
              src={cryptoDetails.image.large}
              alt={cryptoDetails.name}
              className="my-4 mx-auto sm:h-20 sm:w-20 md:h-40 md:w-40 lg:h-60 lg:w-60"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: cryptoDetails.description.en,
              }}
              className="text-justify sm:text-base md:text-lg lg:text-xl"
            />
          </div>
        )}

        {!cryptoDetails && (
          <p className="text-center text-white">
            Select a cryptocurrency to view details.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default CryptoDetails;
