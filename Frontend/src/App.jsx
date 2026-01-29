import AboutMePage from "../components/AboutMePage/AboutMePage";
import Home from "../components/Home";
import WorldTycoonDetails from "../components/Projects/WorldTycoon/WorldTycoonDetails/WorldTycoonDetails";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/worldTycoon" element={<WorldTycoonDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
