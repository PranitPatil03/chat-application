import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Success from "./components/success.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
