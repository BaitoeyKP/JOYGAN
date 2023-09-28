import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Login from "./pages/Login"
import Test from "./pages/testModal";

function App() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="login" element={<Login />} />
      <Route path="test" element={<Test />} />
    </Routes>
  );
};

export default App;
