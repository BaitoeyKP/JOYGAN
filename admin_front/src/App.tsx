import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Login from "./pages/Login"
import Monitor from "./pages/Monitor";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      
      <Route path="monitor" element={<Monitor />} />
    </Routes>
  );
};

export default App;
