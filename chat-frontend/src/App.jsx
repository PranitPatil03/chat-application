import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
      </Routes>
    </>
  );
}

export default App;
