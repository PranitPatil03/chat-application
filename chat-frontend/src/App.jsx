import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import ChatPage from "./pages/ChatPage.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="chat" element={<ChatPage />} />
      </Routes>
    </>
  );
}

export default App;
