import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Error from "./components/Error";

function App() {
  return (
    <div className="text-white">
      <Navbar />
      <br />
      <br />
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/*" element={<Error />}></Route>
        </Routes>
      </Main>
    </div>
  );
}

export default App;
