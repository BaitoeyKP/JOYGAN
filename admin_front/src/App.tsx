import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Monitor from "./pages/Monitor";

function App() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="monitor" element={<Monitor />} />
    </Routes>
  );
};

export default App;
