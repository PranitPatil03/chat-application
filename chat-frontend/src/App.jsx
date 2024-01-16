import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import { useEffect, useState } from "react";
import UserContext from "./context/UserContext.js";
import { LookInSession } from "./common/Session.jsx";

/* Tasks

  1. Store the User in the session 
  2. Using the user status (new/old)
      - display empty or previous user chats or channels
      -  

*/

function App() {
  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    // Get any existing user data from session storage if available
    const userInSession = LookInSession("user");

    userInSession
      ? setUserAuth(JSON.parse(userInSession))
      : setUserAuth({ accessToken: null });
  }, []);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="chat" element={<ChatPage />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
