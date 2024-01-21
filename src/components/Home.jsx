import React from "react";
import CryptoPrice from "./CryptoPrice";
import CryptoDetails from "./CryptoDetails";
import CryptoList from "./CryptoList";

function Home() {
  return (
    <div className="p-10">
      <div>
        <CryptoDetails></CryptoDetails>
      </div>
      <div>
        <CryptoPrice></CryptoPrice>
      </div>
      <div>
        <CryptoList></CryptoList>
      </div>
    </div>
  );
}

export default Home;
