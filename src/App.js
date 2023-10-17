import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Leads from "./components/Leads";
import Lead from "./components/Lead";
import Development from "./components/Development";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/leads">
          <Route index element={<Leads />} />
          <Route path="/leads/:leadId" element={<Lead />} />
        </Route>
        <Route path="/dev" element={<Development />} />
      </Route>
    </Routes>
  );
}

export default App;
