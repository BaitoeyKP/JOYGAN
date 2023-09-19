import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";

function App() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
    </Routes>
  );
}

export default App;
