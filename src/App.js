import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Leads from "./components/Leads";
import Lead from "./components/Lead";
import Accounts from "./components/Accounts";
import Account from "./components/Account";
import Instances from "./components/Instances";
import Instance from "./components/Instance";
import Development from "./components/Development";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/leads">
          <Route index element={<Leads />} />
          <Route path="/leads/:recId" element={<Lead />} />
        </Route>
        <Route path="/accounts">
          <Route index element={<Accounts />} />
          <Route path="/accounts/:recId" element={<Account />} />
        </Route>
        <Route path="/products">
          <Route index element={<Instances recordname="products" />} />
          <Route
            path="/products/:recId"
            element={<Instance record="products" />}
          />
        </Route>
        <Route path="/assets">
          <Route index element={<Instances recordname="assets" />} />
          <Route path="/assets/:recId" element={<Instance record="assets" />} />
        </Route>
        <Route path="/dev" element={<Development />} />
      </Route>
    </Routes>
  );
}

export default App;
