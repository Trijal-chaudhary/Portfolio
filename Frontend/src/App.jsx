import AboutMePage from "../components/AboutMePage/AboutMePage";
import ContactMe from "../components/ContactMe/ContactMe";
import Home from "../components/Home";
import OtherProjectSection from "../components/OtherProjectSection/OtherProjectSection";
import LocalConnectDetails from "../components/Projects/LocalConnect/LocalConnectDetails";
import PravdhanDetails from "../components/Projects/Pravdhan/PravdhanDetails";
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
          <Route path="/localConnect" element={<LocalConnectDetails />} />
          <Route path="/pravdhan" element={<PravdhanDetails />} />
          <Route path="/otherProjects" element={<OtherProjectSection />} />
          <Route path="/contactme" element={<ContactMe redit={true} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
