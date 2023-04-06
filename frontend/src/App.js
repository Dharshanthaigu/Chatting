import "./App.css";
import { useState } from "react";
import AuthenticationPage from "./components/AuthenticationPage";
import ChatBox from "./components/ChatBox";

function App() {
  const [user, setUser] = useState("");

  if (!user) {
    return <AuthenticationPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatBox user={user} />;
  }
}

export default App;
