import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import { useEffect, useState } from "react";
import UserContext from "./context/UserContext.js";
import { LookInSession } from "./common/Session.jsx";
import Main from "./pages/Main.jsx";

/* Tasks

  1. Store the User in the session ✅
  2. Using the user status (new/old)
      - display empty or previous user chats or channels
      -  

*/

function App() {
  const [userAuth, setUserAuth] = useState({});
  const [chat, setChat] = useState({});

  useEffect(() => {
    const userInSession = LookInSession("user");

    userInSession
      ? setUserAuth(JSON.parse(userInSession))
      : setUserAuth({ accessToken: null });
  }, []);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth ,chat, setChat}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="chat" element={<Main />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
